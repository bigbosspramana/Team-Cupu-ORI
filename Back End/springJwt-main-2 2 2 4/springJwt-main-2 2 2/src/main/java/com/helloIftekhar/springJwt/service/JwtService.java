package com.helloIftekhar.springJwt.service;

import com.helloIftekhar.springJwt.repository.TokenWisatRepository;
import com.helloIftekhar.springJwt.repository.TokenVendRepository;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.function.Function;

@Service
public class JwtService {

    @Value("${application.security.jwt.secret-key}")
    private String secretKey;

    @Value("${application.security.jwt.access-token-expiration}")
    private long accessTokenExpire;

    @Value("${application.security.jwt.refresh-token-expiration}")
    private long refreshTokenExpire;

    @Value("${application.security.jwt.clock-skew}")
    private long clockSkew;

    private final TokenWisatRepository tokenWisatRepository;
    private final TokenVendRepository tokenVendRepository;

    public JwtService(TokenWisatRepository tokenWisatRepository, TokenVendRepository tokenVendRepository) {
        this.tokenWisatRepository = tokenWisatRepository;
        this.tokenVendRepository = tokenVendRepository;
    }

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public boolean isValid(String token, UserDetails user) {
        String username = extractUsername(token);

        boolean validToken = tokenWisatRepository
                .findByAccessToken(token)
                .map(t -> !t.isLoggedOut())
                .orElse(false);

        if (!validToken) {
            validToken = tokenVendRepository
                    .findByAccessToken(token)
                    .map(t -> !t.isLoggedOut())
                    .orElse(false);
        }

        return (username.equals(user.getUsername())) && !isTokenExpired(token) && validToken;
    }

    public boolean isValidRefreshToken(String token, UserDetails user) {
        String username = extractUsername(token);

        boolean validRefreshToken = tokenWisatRepository
                .findByRefreshToken(token)
                .map(t -> !t.isLoggedOut())
                .orElse(false);

        if (!validRefreshToken) {
            validRefreshToken = tokenVendRepository
                    .findByRefreshToken(token)
                    .map(t -> !t.isLoggedOut())
                    .orElse(false);
        }

        return (username.equals(user.getUsername())) && !isTokenExpired(token) && validRefreshToken;
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date(System.currentTimeMillis() - clockSkew * 1000));
    }

    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    public <T> T extractClaim(String token, Function<Claims, T> resolver) {
        Claims claims = extractAllClaims(token);
        return resolver.apply(claims);
    }

    private Claims extractAllClaims(String token) {
        return Jwts
                .parser()
                .setSigningKey(getSigninKey())
                .setAllowedClockSkewSeconds(clockSkew)
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    public String generateAccessToken(UserDetails user) {
        return generateToken(user, accessTokenExpire);
    }

    public String generateRefreshToken(UserDetails user) {
        return generateToken(user, refreshTokenExpire);
    }

    private String generateToken(UserDetails user, long expireTime) {
        return Jwts
                .builder()
                .setSubject(user.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + expireTime))
                .signWith(getSigninKey())
                .compact();
    }

    private SecretKey getSigninKey() {
        byte[] keyBytes = Decoders.BASE64.decode(secretKey);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}