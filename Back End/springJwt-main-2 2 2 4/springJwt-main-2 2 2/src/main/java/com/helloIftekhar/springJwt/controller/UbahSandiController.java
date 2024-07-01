package com.helloIftekhar.springJwt.controller;

import com.helloIftekhar.springJwt.model.UserWisat;
import com.helloIftekhar.springJwt.model.UserVendor;
import com.helloIftekhar.springJwt.Dto.GantisandiDto;
import com.helloIftekhar.springJwt.service.GantiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping
public class UbahSandiController {

    @Autowired
    private GantiService gantiService;

    @PutMapping("/change/wisatawan/{emailw}")
    public ResponseEntity<String> changeWisatawanPassword(@RequestBody GantisandiDto passwordChangeDTO, @PathVariable String emailw) {
        Optional<UserWisat> userOptional = gantiService.findWisatByEmail(emailw);
        if (userOptional.isEmpty()) {
            return ResponseEntity.badRequest().body("User not found");
        }

        UserWisat user = userOptional.get();
        gantiService.updateWisatPassword(user, passwordChangeDTO.getNewPassword());
        return ResponseEntity.ok("Password changed successfully");
    }

    @PutMapping("/change/vendor/{emailv}")
    public ResponseEntity<String> changeVendorPassword(@RequestBody GantisandiDto passwordChangeDTO, @PathVariable String emailv) {
        Optional<UserVendor> userOptional = gantiService.findVendorByEmail(emailv);
        if (userOptional.isEmpty()) {
            return ResponseEntity.badRequest().body("User not found");
        }

        UserVendor user = userOptional.get();
        gantiService.updateVendorPassword(user, passwordChangeDTO.getNewPassword());
        return ResponseEntity.ok("Password changed successfully");
    }
}
