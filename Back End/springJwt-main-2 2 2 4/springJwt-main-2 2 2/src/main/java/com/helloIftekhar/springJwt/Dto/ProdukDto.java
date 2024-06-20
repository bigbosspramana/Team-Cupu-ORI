package com.helloIftekhar.springJwt.Dto;

import java.util.Date;

import com.helloIftekhar.springJwt.model.ProdukModel;

public class ProdukDto {

    private Long idProduk;
    private Date tanggalP;
    private String lokasi;
    private double harga;
    private String foto;
    private ProdukModel.Kategori kategori;
    private String deskripsi;

    // Constructor for copying from ProdukModel
    public ProdukDto(ProdukModel produk) {
        this.idProduk = produk.getIdProduk();
        this.tanggalP = produk.getTanggalP();
        this.lokasi = produk.getLokasi();
        this.harga = produk.getHarga();
        this.foto = produk.getFoto();
        this.kategori = produk.getKategori();
        this.deskripsi = produk.getDeskripsi();
    }

    public Long getIdProduk() {
        return idProduk;
    }

    public void setIdProduk(Long idProduk) {
        this.idProduk = idProduk;
    }

    public Date getTanggalP() {
        return tanggalP;
    }

    public void setTanggalP(Date tanggalP) {
        this.tanggalP = tanggalP;
    }

    public String getLokasi() {
        return lokasi;
    }

    public void setLokasi(String lokasi) {
        this.lokasi = lokasi;
    }

    public double getHarga() {
        return harga;
    }

    public void setHarga(double harga) {
        this.harga = harga;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public ProdukModel.Kategori getKategori() {
        return kategori;
    }

    public void setKategori(ProdukModel.Kategori kategori) {
        this.kategori = kategori;
    }

    public String getDeskripsi() {
        return deskripsi;
    }

    public void setDeskripsi(String deskripsi) {
        this.deskripsi = deskripsi;
    }
}
