package com.helloIftekhar.springJwt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.helloIftekhar.springJwt.model.UserVendor;

import java.util.Optional;

@Repository
public interface UserVendorRepository extends JpaRepository<UserVendor, Integer> {
    Optional<UserVendor> findByEmailv(String emailv);
}
