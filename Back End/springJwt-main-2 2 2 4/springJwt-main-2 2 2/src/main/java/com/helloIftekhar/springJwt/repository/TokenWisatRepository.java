package com.helloIftekhar.springJwt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.helloIftekhar.springJwt.model.TokenWisat;

import java.util.List;
import java.util.Optional;

@Repository
public interface TokenWisatRepository extends JpaRepository<TokenWisat, Integer> {
    Optional<TokenWisat> findByAccessToken(String accessToken);
    Optional<TokenWisat> findByRefreshToken(String refreshToken);
    List<TokenWisat> findAllByUserIdAndLoggedOutFalse(Integer userId);
}
