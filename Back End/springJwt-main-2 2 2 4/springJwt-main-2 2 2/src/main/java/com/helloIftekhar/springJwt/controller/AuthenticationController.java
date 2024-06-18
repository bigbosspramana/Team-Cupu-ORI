package com.helloIftekhar.springJwt.controller;

import com.helloIftekhar.springJwt.Dto.VendorRegisterRequest;
import com.helloIftekhar.springJwt.Dto.WisatawanRegisterRequest; // Pastikan import ini sesuai dengan struktur package yang benar
import com.helloIftekhar.springJwt.model.AuthenticationResponse;
import com.helloIftekhar.springJwt.model.UserVendor;
import com.helloIftekhar.springJwt.model.UserWisat;
import com.helloIftekhar.springJwt.service.AuthenticationService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.util.Optional;

import org.springframework.security.core.Authentication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RequestMapping
@RestController
public class AuthenticationController {

    private final AuthenticationService authService;

    public AuthenticationController(AuthenticationService authService) {
        this.authService = authService;
    }

    @PostMapping("/register/wisatawan")
    public ResponseEntity<AuthenticationResponse> registerWisatawan(@RequestBody WisatawanRegisterRequest request) { // Pastikan kelas WisatawanRegisterRequest di-import dengan benar
        return ResponseEntity.ok(authService.registerWisatawan(request));
    }

    @PostMapping("/register/vendor")
    public ResponseEntity<AuthenticationResponse> registerVendor(@RequestBody VendorRegisterRequest request) {
        return ResponseEntity.ok(authService.registerVendor(request));
    }

    @PostMapping("/login/wisatawan")
    public ResponseEntity<AuthenticationResponse> loginWisat(@RequestBody UserWisat request) {
        return ResponseEntity.ok(authService.authenticateWisat(request));
    }

    @PostMapping("/login/vendor")
    public ResponseEntity<AuthenticationResponse> loginVendor(@RequestBody UserVendor requestvVendor) {
        return ResponseEntity.ok(authService.authenticateVendor(requestvVendor));
    }

    @PostMapping("/refresh_token")
    public ResponseEntity<AuthenticationResponse> refreshToken(HttpServletRequest request, HttpServletResponse response) {
        return authService.refreshToken(request, response);
    }

    @GetMapping("/profile/wisatawan")
    public ResponseEntity<UserWisat> getWisatawan(@RequestParam String emailw) {
        Optional<UserWisat> userWisat = authService.getWisatawanByEmail(emailw);
        return userWisat.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/profile/vendor")
    public ResponseEntity<UserVendor> getVendor(@RequestParam String emailv) {
        Optional<UserVendor> userVendor = authService.getVendorByEmail(emailv);
        return userVendor.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/perbaiki/wisatawan")
    public ResponseEntity<UserWisat> updateWisatawan(@RequestParam String email, @RequestBody UserWisat updatedUserWisat) {
        Optional<UserWisat> userWisat = authService.updateWisatawan(email, updatedUserWisat);
        return userWisat.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/perbaiki/vendor")
    public ResponseEntity<UserVendor> updateVendor(@RequestParam String email, @RequestBody UserVendor updatedUserVendor) {
        Optional<UserVendor> userVendor = authService.updateVendor(email, updatedUserVendor);
        return userVendor.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/hapus/wisatawan")
    public ResponseEntity<Void> deleteWisatawan(@RequestParam String email) {
        boolean deleted = authService.deleteWisatawan(email);
        if (deleted) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/hapus/vendor")
    public ResponseEntity<Void> deleteVendor(@RequestParam String email) {
        boolean deleted = authService.deleteVendor(email);
        if (deleted) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/user/logout")
    public void logout(HttpServletRequest request, HttpServletResponse response, Authentication authentication) {
        // Logika logout sudah ditangani oleh SecurityConfig dan CustomLogoutHandler
    }
}
