package com.helloIftekhar.springJwt.controller;

import com.helloIftekhar.springJwt.Dto.LoginRequest;
import com.helloIftekhar.springJwt.Dto.VendorRegisterRequest;
import com.helloIftekhar.springJwt.Dto.WisatawanRegisterRequest; // Pastikan import ini sesuai dengan struktur package yang benar
import com.helloIftekhar.springJwt.model.AuthenticationResponse;
import com.helloIftekhar.springJwt.model.User;
import com.helloIftekhar.springJwt.model.UserVendor;
import com.helloIftekhar.springJwt.model.UserWisat;
import com.helloIftekhar.springJwt.repository.UserRepository;
import com.helloIftekhar.springJwt.service.AuthenticationService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.util.Collections;
import java.util.Optional;

import org.springframework.security.core.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
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

    @PutMapping("/perbaiki/wisatawan/{id}")
    public ResponseEntity<UserWisat> updateWisatawan(@RequestParam String email, @RequestBody UserWisat updatedUserWisat) {
        Optional<UserWisat> userWisat = authService.updateWisatawan(email, updatedUserWisat);
        return userWisat.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/perbaiki/vendor/{id}")
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

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/getRoleByEmail")
    public ResponseEntity<?> getRoleByEmail(@RequestParam String email) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent()) {
            return ResponseEntity.ok(Collections.singletonMap("role", user.get().getRole()));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Collections.singletonMap("message", "User not found"));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody LoginRequest request) {
        if (request.getUserType().equalsIgnoreCase("WISATAWAN")) {
            return ResponseEntity.ok(authService.authenticateWisat(request));
        } else if (request.getUserType().equalsIgnoreCase("VENDOR")) {
            return ResponseEntity.ok(authService.authenticateVendor(request));
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new AuthenticationResponse("Invalid user type", null, null));
        }
    }
}
