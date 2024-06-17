package com.helloIftekhar.springJwt.model;

import jakarta.persistence.*;

import lombok.*;

@Entity
@Table(name = "Barang")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BarangModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_Barang")
    private Long idBarang;

    @Column(name = "Nama_Barang", columnDefinition = "VARCHAR(255)")
    private String namaBarang;

    @Column(name = "Jumlah_Barang")
    private int jumlahBarang;

    @Column(name = "Deskripsi_Barang", columnDefinition = "VARCHAR(255)")
    private String deskripsiBarang;

    @Column(name = "Harga_Barang", columnDefinition = "DOUBLE")
    private double hargaBarang;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_produk", nullable = false)
    private ProdukModel produk;
}
