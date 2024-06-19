package com.helloIftekhar.springJwt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.helloIftekhar.springJwt.model.ProdukModel;

@Repository
public interface ProdukRepository extends JpaRepository<ProdukModel, Long> {
}
