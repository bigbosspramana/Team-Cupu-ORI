package com.helloIftekhar.springJwt.controller;

import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.helloIftekhar.springJwt.model.ProdukModel;
import com.helloIftekhar.springJwt.repository.ProdukRepository;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/control/produk")
@RequiredArgsConstructor
public class ProdukController {
    private final ProdukRepository produkRepository;

    @GetMapping
    public ResponseEntity<Iterable<ProdukModel>> getAllInventory() {
        Iterable<ProdukModel> produk = produkRepository.findAll();
        if (!produk.iterator().hasNext()) {
            return new ResponseEntity<>(produk, HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(produk, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<ProdukModel> addNewProduk(@RequestBody ProdukModel produk) {
        try {
            ProdukModel newProduk = produkRepository.save(produk);
            return new ResponseEntity<>(newProduk, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProdukModel> updateInventoryById(@PathVariable Long id, @RequestBody ProdukModel produkUpdate) {
        Optional<ProdukModel> optionalProduk = produkRepository.findById(id);
        if (optionalProduk.isPresent()) {
            ProdukModel produk = optionalProduk.get();
            produk.setTanggalP(produkUpdate.getTanggalP());
            produk.setLokasi(produkUpdate.getLokasi());
            produk.setHarga(produkUpdate.getHarga());
            produk.setFoto(produkUpdate.getFoto());
            produk.setKategori(produkUpdate.getKategori());
            produk.setDeskripsi(produkUpdate.getDeskripsi());
            // Jika perlu update juga daftar barang atau transaksi terkait, bisa diimplementasikan di sini
            // produk.setBarangList(produkUpdate.getBarangList());
            // produk.setTransaksiList(produkUpdate.getTransaksiList());

            ProdukModel updatedProduk = produkRepository.save(produk);
            return ResponseEntity.ok(updatedProduk);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}