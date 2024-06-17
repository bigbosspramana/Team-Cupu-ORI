package com.helloIftekhar.springJwt.Dto;

import java.util.Date;

public class DetailTransaksiDto {

    private Long idTransaksi;
    private Long idWisatawan;
    private Date tanggalTransaksi;
    private String metodePembayaran;
    private String status;

    public Long getIdTransaksi() {
        return idTransaksi;
    }

    public void setIdTransaksi(Long idTransaksi) {
        this.idTransaksi = idTransaksi;
    }

    public Long getIdWisatawan() {
        return idWisatawan;
    }

    public void setIdWisatawan(Long idWisatawan) {
        this.idWisatawan = idWisatawan;
    }

    public Date getTanggalTransaksi() {
        return tanggalTransaksi;
    }

    public void setTanggalTransaksi(Date tanggalTransaksi) {
        this.tanggalTransaksi = tanggalTransaksi;
    }

    public String getMetodePembayaran() {
        return metodePembayaran;
    }

    public void setMetodePembayaran(String metodePembayaran) {
        this.metodePembayaran = metodePembayaran;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
