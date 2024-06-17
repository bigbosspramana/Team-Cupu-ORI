package com.helloIftekhar.springJwt.Dto;

import com.helloIftekhar.springJwt.model.BarangModel;

public class BarangDto {

    private Long idBarang;
    private String namaBarang;
    private int jumlahBarang;
    private String deskripsiBarang;
    private double hargaBarang;
    private Long idProduk; // Untuk menyimpan ID produk terkait

    // Constructor for copying from BarangModel
    public BarangDto(BarangModel barang) {
        this.idBarang = barang.getIdBarang();
        this.namaBarang = barang.getNamaBarang();
        this.jumlahBarang = barang.getJumlahBarang();
        this.deskripsiBarang = barang.getDeskripsiBarang();
        this.hargaBarang = barang.getHargaBarang();
        if (barang.getProduk() != null) {
            this.idProduk = barang.getProduk().getIdProduk();
        }
    }

    public Long getIdBarang() {
        return idBarang;
    }

    public void setIdBarang(Long idBarang) {
        this.idBarang = idBarang;
    }

    public String getNamaBarang() {
        return namaBarang;
    }

    public void setNamaBarang(String namaBarang) {
        this.namaBarang = namaBarang;
    }

    public int getJumlahBarang() {
        return jumlahBarang;
    }

    public void setJumlahBarang(int jumlahBarang) {
        this.jumlahBarang = jumlahBarang;
    }

    public String getDeskripsiBarang() {
        return deskripsiBarang;
    }

    public void setDeskripsiBarang(String deskripsiBarang) {
        this.deskripsiBarang = deskripsiBarang;
    }

    public double getHargaBarang() {
        return hargaBarang;
    }

    public void setHargaBarang(double hargaBarang) {
        this.hargaBarang = hargaBarang;
    }

    public Long getIdProduk() {
        return idProduk;
    }

    public void setIdProduk(Long idProduk) {
        this.idProduk = idProduk;
    }
}
