package com.helloIftekhar.springJwt.Dto;

import com.helloIftekhar.springJwt.model.ProdukModel;
import lombok.Data;

import java.util.Date;

@Data
public class ProdukDto {

    private Long idProduk;
    private Date tanggalP;
    private String namaLokasi;
    private String lokasi;
    private double harga;
    private byte[] foto;
    private ProdukModel.Kategori kategori;
    private String deskripsi;
}