package com.helloIftekhar.springJwt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.helloIftekhar.springJwt.model.DetailTransaksiModel;

@Repository
public interface DetailTransaksiRepository extends JpaRepository<DetailTransaksiModel, Long> {
}
