package com.helloIftekhar.springJwt.Dto;

import com.helloIftekhar.springJwt.model.ProdukModel;

public class TransaksiDto {

    private Long idTransaksi;
    private ProdukModel produk;
    private double totalHarga;

    public Long getIdTransaksi() {
        return idTransaksi;
    }

    public void setIdTransaksi(Long idTransaksi) {
        this.idTransaksi = idTransaksi;
    }

    public ProdukModel getProduk() {
        return produk;
    }

    public void setProduk(ProdukModel produk) {
        this.produk = produk;
    }

    public double getTotalHarga() {
        return totalHarga;
    }

    public void setTotalHarga(double totalHarga) {
        this.totalHarga = totalHarga;
    }
}
