package com.helloIftekhar.springJwt.Dto;

import com.helloIftekhar.springJwt.model.UserWisat.JenisKelamin;
import com.helloIftekhar.springJwt.model.UserWisat.Kota;
import java.util.Date;

public class WisatawanRegisterRequest {
    private String emailw;
    private String passwordw;
    private String konfirmasipasswordw;
    private String namaLengkapw;
    private JenisKelamin jenisKelaminw;
    private Date tanggalLahirw;
    private Kota kotaw;
    private String nomorTeleponw;

    public String getEmailw() {
        return emailw;
    }
    public void setEmailw(String emailw) {
        this.emailw = emailw;
    }
    public String getPasswordw() {
        return passwordw;
    }
    public void setPasswordw(String passwordw) {
        this.passwordw = passwordw;
    }
    public String getKonfirmasipasswordw() {
        return konfirmasipasswordw;
    }
    public void setKonfirmasipasswordw(String konfirmasipasswordw) {
        this.konfirmasipasswordw = konfirmasipasswordw;
    }
    public String getNamaLengkapw() {
        return namaLengkapw;
    }
    public void setNamaLengkapw(String namaLengkapw) {
        this.namaLengkapw = namaLengkapw;
    }
    public JenisKelamin getJenisKelaminw() {
        return jenisKelaminw;
    }
    public void setJenisKelaminw(JenisKelamin jenisKelaminw) {
        this.jenisKelaminw = jenisKelaminw;
    }
    public Date getTanggalLahirw() {
        return tanggalLahirw;
    }
    public void setTanggalLahirw(Date tanggalLahirw) {
        this.tanggalLahirw = tanggalLahirw;
    }
    public Kota getKotaw() {
        return kotaw;
    }
    public void setKotaw(Kota kotaw) {
        this.kotaw = kotaw;
    }
    public String getNomorTeleponw() {
        return nomorTeleponw;
    }
    public void setNomorTeleponw(String nomorTeleponw) {
        this.nomorTeleponw = nomorTeleponw;
    }

    
}
