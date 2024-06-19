package com.helloIftekhar.springJwt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.helloIftekhar.springJwt.model.TransaksiModel;

@Repository
public interface TransaksiRepository extends JpaRepository<TransaksiModel, Long> {
}
