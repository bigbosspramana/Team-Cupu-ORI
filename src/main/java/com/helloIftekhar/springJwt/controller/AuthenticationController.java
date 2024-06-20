package com.helloIftekhar.springJwt.controller;

import com.helloIftekhar.springJwt.Dto.VendorRegisterRequest;
import com.helloIftekhar.springJwt.Dto.WisatawanRegisterRequest; // Pastikan import ini sesuai dengan struktur package yang benar
import com.helloIftekhar.springJwt.model.AuthenticationResponse;
import com.helloIftekhar.springJwt.model.LoginRequest;
import com.helloIftekhar.springJwt.model.UserVendor;
import com.helloIftekhar.springJwt.model.UserWisat;
import com.helloIftekhar.springJwt.service.AuthenticationService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.util.Optional;

import org.springframework.security.core.Authentication;
import org.springframework.http.HttpStatus;
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

    // @PostMapping("/login/wisatawan")
    // public ResponseEntity<AuthenticationResponse> loginWisat(@RequestBody UserWisat request) {
    //     return ResponseEntity.ok(authService.authenticateWisat(request));
    // }

    // @PostMapping("/login/vendor")
    // public ResponseEntity<AuthenticationResponse> loginVendor(@RequestBody UserVendor requestvVendor) {
    //     return ResponseEntity.ok(authService.authenticateVendor(requestvVendor));
    // }
    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody LoginRequest request) {
        AuthenticationResponse response = authService.authenticate(request.getEmail(), request.getPassword());
        if (response.getAccessToken() != null) {
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }

    @PostMapping("/refresh_token")
    public ResponseEntity<AuthenticationResponse> refreshToken(HttpServletRequest request, HttpServletResponse response) {
        return authService.refreshToken(request, response);
    }

    @GetMapping("/profile/wisatawan/{emailw}")
    public ResponseEntity<UserWisat> getWisatawan(@PathVariable String emailw) {
        Optional<UserWisat> userWisat = authService.getWisatawanByEmail(emailw);
        return userWisat.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/profile/vendor/{emailv}")
    public ResponseEntity<UserVendor> getVendor(@PathVariable String emailv) {
        Optional<UserVendor> userVendor = authService.getVendorByEmail(emailv);
        return userVendor.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/edit/profile/wisatawan/{email}")
    public ResponseEntity<Object> editUserWisat(@PathVariable String email, @RequestBody UserWisat updatedUserWisat) {
        Optional<UserWisat> updatedUser = authService.updateWisatawan(email, updatedUserWisat);
        if (updatedUser.isPresent()) {
            return ResponseEntity.ok(updatedUser.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/edit/profile/vendor/{emailv}")
    public ResponseEntity<String> updateVendorProfile(@PathVariable String emailv, @RequestBody UserVendor updatedUserVendor) {
        Optional<UserVendor> updatedUser = authService.updateVendorProfile(emailv, updatedUserVendor);
        if (updatedUser.isPresent()) {
            return ResponseEntity.ok("Profile updated successfully");
        } else {
            return ResponseEntity.badRequest().body("User not found");
        }
    }

    @GetMapping("/user/logout")
    public void logout(HttpServletRequest request, HttpServletResponse response, Authentication authentication) {
        // Logika logout sudah ditangani oleh SecurityConfig dan CustomLogoutHandler
    }
}
