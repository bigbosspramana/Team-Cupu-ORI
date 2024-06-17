package com.helloIftekhar.springJwt.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Table(name = "Transaksi")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TransaksiModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_Transaksi")
    private Long idTransaksi;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_wisatawan", nullable = false)
    private UserWisat user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ID_Produk", nullable = false)
    private ProdukModel produk;

    @Column(name = "Tanggal_Transaksi")
    @Temporal(TemporalType.DATE)
    private Date tanggalTransaksi;

    @Enumerated(EnumType.STRING)
    @Column(name = "Metode_Pembayaran")
    private MetodePembayaran metodePembayaran;

    @Enumerated(EnumType.STRING)
    @Column(name = "Status")
    private StatusTransaksi status;

    @Column(name = "Total_Harga")
    private double totalHarga;
}
