package com.helloIftekhar.springJwt.repository;

import com.helloIftekhar.springJwt.model.UserWisat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserWisatRepository extends JpaRepository<UserWisat, Integer> {
    Optional<UserWisat> findByEmailw(String emailw);
}
