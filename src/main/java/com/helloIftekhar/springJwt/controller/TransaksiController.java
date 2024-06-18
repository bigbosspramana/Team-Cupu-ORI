package com.helloIftekhar.springJwt.controller;

import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.helloIftekhar.springJwt.model.ProdukModel;
import com.helloIftekhar.springJwt.model.TransaksiModel;
import com.helloIftekhar.springJwt.repository.TransaksiRepository;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin
@RequestMapping
@RequiredArgsConstructor
public class TransaksiController {
    private final TransaksiRepository transaksiRepository;

    @GetMapping("/control/transaksi")
    public ResponseEntity<Iterable<TransaksiModel>> getAllInventory() {
        Iterable<TransaksiModel> transaksi = transaksiRepository.findAll();
        if (!transaksi.iterator().hasNext()) {
            return new ResponseEntity<>(transaksi, HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(transaksi, HttpStatus.OK);
    }

    @PostMapping("/control/transaksi")
    public ResponseEntity<ProdukModel> addInventory(@RequestBody TransaksiModel transaksi) {
        transaksiRepository.save(transaksi);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping("/control/transaksi/{id}")
    public ResponseEntity<TransaksiModel> updateInventoryById(@PathVariable Long id, @RequestBody TransaksiModel transaksiUpdate) {
        Optional<TransaksiModel> optionalTransaksi = transaksiRepository.findById(id);
        if (optionalTransaksi.isPresent()) {
            TransaksiModel transaksi = optionalTransaksi.get();
            transaksi.setIdTransaksi(transaksiUpdate.getIdTransaksi());
            transaksi.setProduk(transaksiUpdate.getProduk());
            transaksi.setTotalHarga(transaksiUpdate.getTotalHarga());
            transaksi.setMetodePembayaran(transaksiUpdate.getMetodePembayaran());
            transaksi.setStatus(transaksiUpdate.getStatus());

            TransaksiModel updatedTransaksi = transaksiRepository.save(transaksi);
            return ResponseEntity.ok(updatedTransaksi);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}