package com.helloIftekhar.springJwt.controller;

import java.util.Optional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.helloIftekhar.springJwt.model.BarangModel;
import com.helloIftekhar.springJwt.model.ProdukModel;
import com.helloIftekhar.springJwt.repository.BarangRepository;
import com.helloIftekhar.springJwt.repository.ProdukRepository;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin
@RequestMapping
@RequiredArgsConstructor
public class BarangController {
    private final BarangRepository barangRepository;
    private final ProdukRepository produkRepository;

    @GetMapping("/control/barang")
    public ResponseEntity<Iterable<BarangModel>> getAllInventory() {
        Iterable<BarangModel> barang = barangRepository.findAll();
        if (!barang.iterator().hasNext()) {
            return new ResponseEntity<>(barang, HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(barang, HttpStatus.OK);
    }

    @PostMapping("/control/barang")
    public ResponseEntity<BarangModel> addInventory(@RequestBody BarangModel barang) {
        Optional<ProdukModel> produkOpt = produkRepository.findById(barang.getProduk().getIdProduk());
        if (produkOpt.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        barang.setProduk(produkOpt.get());
        barangRepository.save(barang);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping("/control/barang/{id}")
    public ResponseEntity<BarangModel> updateInventoryById(@PathVariable Long id, @RequestBody BarangModel barangUpdate) {
        Optional<BarangModel> optionalBarang = barangRepository.findById(id);
        if (optionalBarang.isPresent()) {
            BarangModel barang = optionalBarang.get();
            barang.setNamaBarang(barangUpdate.getNamaBarang());
            barang.setJumlahBarang(barangUpdate.getJumlahBarang());
            barang.setDeskripsiBarang(barangUpdate.getDeskripsiBarang());
            barang.setHargaBarang(barangUpdate.getHargaBarang());
            
            Optional<ProdukModel> produkOpt = produkRepository.findById(barangUpdate.getProduk().getIdProduk());
            if (produkOpt.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            barang.setProduk(produkOpt.get());

            BarangModel updatedBarang = barangRepository.save(barang);
            return ResponseEntity.ok(updatedBarang);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
