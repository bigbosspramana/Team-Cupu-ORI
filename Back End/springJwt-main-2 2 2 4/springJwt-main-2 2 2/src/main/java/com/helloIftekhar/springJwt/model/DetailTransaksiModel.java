package com.helloIftekhar.springJwt.model;

import jakarta.persistence.*;
import java.util.Date;

import lombok.*;

@Entity
@Table(name = "DetailTransaksi")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class DetailTransaksiModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_Transaksi")
    private Long idTransaksi;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_wisatawan", nullable = false)
    private UserWisat user;

    @Column(name = "Tanggal_Transaksi")
    @Temporal(TemporalType.DATE)
    private Date tanggalTransaksi;

    @Column(name = "Status")
    private String status;
}
