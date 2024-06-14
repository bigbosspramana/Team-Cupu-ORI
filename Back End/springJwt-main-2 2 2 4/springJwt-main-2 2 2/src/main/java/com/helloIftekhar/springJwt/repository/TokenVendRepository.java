package com.helloIftekhar.springJwt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.helloIftekhar.springJwt.model.TokenVend;

import java.util.List;
import java.util.Optional;

@Repository
public interface TokenVendRepository extends JpaRepository<TokenVend, Integer> {
    Optional<TokenVend> findByAccessToken(String accessToken);
    Optional<TokenVend> findByRefreshToken(String refreshToken);
    List<TokenVend> findAllByUserIdAndLoggedOutFalse(Integer userId);
}
