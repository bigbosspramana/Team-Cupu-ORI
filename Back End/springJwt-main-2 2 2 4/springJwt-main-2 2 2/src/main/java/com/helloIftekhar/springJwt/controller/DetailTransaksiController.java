package com.helloIftekhar.springJwt.controller;

import com.helloIftekhar.springJwt.model.DetailTransaksiModel;
import com.helloIftekhar.springJwt.repository.DetailTransaksiRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/control/detailtransaksi")
@RequiredArgsConstructor
public class DetailTransaksiController {

    private final DetailTransaksiRepository detailTransaksiRepository;

    @GetMapping
    public ResponseEntity<Iterable<DetailTransaksiModel>> getAllDetailTransaksi() {
        Iterable<DetailTransaksiModel> detailTransaksis = detailTransaksiRepository.findAll();
        if (!detailTransaksis.iterator().hasNext()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(detailTransaksis, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<DetailTransaksiModel> addDetailTransaksi(@RequestBody DetailTransaksiModel detailTransaksi) {
        detailTransaksiRepository.save(detailTransaksi);
        return new ResponseEntity<>(detailTransaksi, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<DetailTransaksiModel> updateDetailTransaksiById(@PathVariable Long id, @RequestBody DetailTransaksiModel detailTransaksiUpdate) {
        Optional<DetailTransaksiModel> optionalDetail = detailTransaksiRepository.findById(id);
        if (optionalDetail.isPresent()) {
            DetailTransaksiModel existingDetailTransaksi = optionalDetail.get();
            existingDetailTransaksi.setTanggalTransaksi(detailTransaksiUpdate.getTanggalTransaksi());
            existingDetailTransaksi.setStatus(detailTransaksiUpdate.getStatus());

            DetailTransaksiModel updatedDetailTransaksi = detailTransaksiRepository.save(existingDetailTransaksi);
            return ResponseEntity.ok(updatedDetailTransaksi);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
