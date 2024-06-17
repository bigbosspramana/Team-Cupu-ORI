package com.helloIftekhar.springJwt.model;

import jakarta.persistence.*;

import java.util.Date;
import java.util.List;

import lombok.*;

@Entity
@Table(name = "Produk")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProdukModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_Produk")
    private Long idProduk;

    @Column(name = "Tanggalp")
    @Temporal(TemporalType.DATE)
    private Date tanggalP;

    @Column(name = "Lokasi", columnDefinition = "VARCHAR(255)")
    private String lokasi;

    @Column(name = "Harga", columnDefinition = "DOUBLE")
    private double harga;

    @Column(name = "Foto", columnDefinition = "VARCHAR(255)") // Ubah ke VARCHAR sesuai kebutuhan
    private String foto;

    @Enumerated(EnumType.STRING)
    @Column(name = "Kategori", columnDefinition = "VARCHAR(255)")
    private Kategori kategori;

    @Column(name = "Deskripsi", columnDefinition = "VARCHAR(255)")
    private String deskripsi;

    @OneToMany(mappedBy = "produk", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<BarangModel> barangList;

    @OneToMany(mappedBy = "produk")
    private List<TransaksiModel> transaksiList;

    public enum Kategori {
        GUNUNG,
        PULAU,
        PANTAI
    }
}
