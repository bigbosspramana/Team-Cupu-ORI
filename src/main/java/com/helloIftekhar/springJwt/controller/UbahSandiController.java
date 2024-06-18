package com.helloIftekhar.springJwt.controller;

import com.helloIftekhar.springJwt.model.UserWisat;
import com.helloIftekhar.springJwt.repository.UserVendorRepository;
import com.helloIftekhar.springJwt.repository.UserWisatRepository;
import com.helloIftekhar.springJwt.Dto.GantisandiDto;
import com.helloIftekhar.springJwt.model.UserVendor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping
public class UbahSandiController {

    @Autowired
    private UserWisatRepository userRepository;

    @Autowired
    private UserVendorRepository vendorRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PutMapping("/change/wisatawan/{id}")
    public ResponseEntity<String> changeWisatawanPassword(@RequestBody GantisandiDto passwordChangeDTO, @RequestParam String email) {
        Optional<UserWisat> userOptional = userRepository.findByEmailw(email);
        if (userOptional.isEmpty()) {
            return ResponseEntity.badRequest().body("User not found");
        }

        UserWisat user = userOptional.get();
        user.setPasswordw(passwordEncoder.encode(passwordChangeDTO.getNewPassword()));
        userRepository.save(user);
        return ResponseEntity.ok("Password changed successfully");
    }

    @PutMapping("/change/vendor/{id}")
    public ResponseEntity<String> changeVendorPassword(@RequestBody GantisandiDto passwordChangeDTO, @RequestParam String email) {
        Optional<UserVendor> userOptional = vendorRepository.findByEmailv(email);
        if (userOptional.isEmpty()) {
            return ResponseEntity.badRequest().body("User not found");
        }

        UserVendor user = userOptional.get();
        user.setPasswordv(passwordEncoder.encode(passwordChangeDTO.getNewPassword()));
        vendorRepository.save(user);
        return ResponseEntity.ok("Password changed successfully");
    }
}