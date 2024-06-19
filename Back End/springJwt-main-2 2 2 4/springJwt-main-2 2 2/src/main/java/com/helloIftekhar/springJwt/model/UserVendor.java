package com.helloIftekhar.springJwt.model;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.*;

import java.util.Collection;
import java.util.Collections;
import java.util.UUID;

@Entity
@Table(name = "user_vendor")
public class UserVendor implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;
    
    @Column(name = "id_vendor")
    private String id_vendor = UUID.randomUUID().toString();

    @Column(name = "email")
    private String emailv;

    @Column(name = "password")
    private String passwordv;

    // @Column(name = "confirm_password")
    // private String confirmPasswordv;

    @Column(name = "nama_vendor")
    private String namaVendorv;

    @Column(name = "alamat")
    private String alamatv;

    @Column(name = "nomor_telepon")
    private String nomorTeleponv;

    @Column(name = "instagram")
    private String instagramv;

    @Column(name = "tiktok")
    private String tiktokv;

    @Column(name = "facebook")
    private String facebookv;

    @Enumerated(EnumType.STRING)
    private Role role = Role.VENDOR;

    public UserVendor() {
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singletonList(new SimpleGrantedAuthority(role.name()));
    }

    public UserVendor(String id_vendor, String emailv, String passwordv, String namaVendorv,
            String alamatv, String nomorTeleponv, String instagramv, String tiktokv, String facebookv, Role role) {
        this.id_vendor = id_vendor;
        this.emailv = emailv;
        this.passwordv = passwordv;
        // this.confirmPasswordv = confirmPasswordv;
        this.namaVendorv = namaVendorv;
        this.alamatv = alamatv;
        this.nomorTeleponv = nomorTeleponv;
        this.instagramv = instagramv;
        this.tiktokv = tiktokv;
        this.facebookv = facebookv;
        this.role = role;
    }

    @Override
    public String getPassword() {
        return this.passwordv;
    }

    @Override
    public String getUsername() {
        return this.emailv;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true; // Implement according to your logic
    }

    @Override
    public boolean isAccountNonLocked() {
        return true; // Implement according to your logic
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true; // Implement according to your logic
    }

    @Override
    public boolean isEnabled() {
        return true; // Implement according to your logic
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getId_vendor() {
        return id_vendor;
    }

    public void setId_vendor(String id_vendor) {
        this.id_vendor = id_vendor;
    }

    public String getEmailv() {
        return emailv;
    }

    public void setEmailv(String emailv) {
        this.emailv = emailv;
    }

    public String getPasswordv() {
        return passwordv;
    }

    public void setPasswordv(String passwordv) {
        this.passwordv = passwordv;
    }

    // public String getConfirmPasswordv() {
    //     return confirmPasswordv;
    // }

    // public void setConfirmPasswordv(String confirmPasswordv) {
    //     this.confirmPasswordv = confirmPasswordv;
    // }

    public String getNamaVendorv() {
        return namaVendorv;
    }

    public void setNamaVendorv(String namaVendorv) {
        this.namaVendorv = namaVendorv;
    }

    public String getAlamatv() {
        return alamatv;
    }

    public void setAlamatv(String alamatv) {
        this.alamatv = alamatv;
    }

    public String getNomorTeleponv() {
        return nomorTeleponv;
    }

    public void setNomorTeleponv(String nomorTeleponv) {
        this.nomorTeleponv = nomorTeleponv;
    }

    public String getInstagramv() {
        return instagramv;
    }

    public void setInstagramv(String instagramv) {
        this.instagramv = instagramv;
    }

    public String getTiktokv() {
        return tiktokv;
    }

    public void setTiktokv(String tiktokv) {
        this.tiktokv = tiktokv;
    }

    public String getFacebookv() {
        return facebookv;
    }

    public void setFacebookv(String facebookv) {
        this.facebookv = facebookv;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public enum Role {
        WISATAWAN, VENDOR
    }
}
