package com.helloIftekhar.springJwt.service;

import com.helloIftekhar.springJwt.Dto.VendorRegisterRequest;
import com.helloIftekhar.springJwt.Dto.WisatawanRegisterRequest;
import com.helloIftekhar.springJwt.model.AuthenticationResponse;
import com.helloIftekhar.springJwt.model.TokenVend;
import com.helloIftekhar.springJwt.model.TokenWisat;
import com.helloIftekhar.springJwt.model.UserVendor;
import com.helloIftekhar.springJwt.model.UserWisat;
import com.helloIftekhar.springJwt.repository.TokenWisatRepository;
import com.helloIftekhar.springJwt.repository.TokenVendRepository;
import com.helloIftekhar.springJwt.repository.UserVendorRepository;
import com.helloIftekhar.springJwt.repository.UserWisatRepository;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.util.Optional;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

    private final UserWisatRepository userWisatRepository;
    private final UserVendorRepository vendorRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final TokenWisatRepository tokenWisatRepository;
    private final TokenVendRepository tokenVendRepository;
    private final AuthenticationManager authenticationManager;

    private boolean isEmailExists(String email) {
        return vendorRepository.findByEmailv(email).isPresent() || userWisatRepository.findByEmailw(email).isPresent();
    }

    public AuthenticationService(UserWisatRepository userWisatRepository,
            UserVendorRepository vendorRepository,
            PasswordEncoder passwordEncoder,
            JwtService jwtService,
            TokenWisatRepository tokenWisatRepository,
            TokenVendRepository tokenVendRepository,
            AuthenticationManager authenticationManager) {
        this.userWisatRepository = userWisatRepository;
        this.vendorRepository = vendorRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.tokenWisatRepository = tokenWisatRepository;
        this.tokenVendRepository = tokenVendRepository;
        this.authenticationManager = authenticationManager;
    }

    public AuthenticationResponse registerWisatawan(WisatawanRegisterRequest request) {
        if (isEmailExists(request.getEmailw())) {
            return new AuthenticationResponse(null, null, "Email Already Exist", "WISATAWAN");
        }

        UserWisat user = new UserWisat();
        user.setEmailw(request.getEmailw());
        user.setPasswordw(passwordEncoder.encode(request.getPasswordw()));
        user.setNamaLengkapw(request.getNamaLengkapw());
        user.setJenisKelaminw(request.getJenisKelaminw());
        user.setTanggalLahirw(request.getTanggalLahirw());
        user.setKotaw(request.getKotaw());
        user.setNomorTeleponw(request.getNomorTeleponw());
        user.setRole(UserWisat.Role.WISATAWAN);

        user = userWisatRepository.save(user);

        String accessToken = jwtService.generateAccessToken(user);
        String refreshToken = jwtService.generateRefreshToken(user);

        saveUserToken(accessToken, refreshToken, user);

        return new AuthenticationResponse(accessToken, refreshToken, "User registration was successful", "WISATAWAN");
    }

    public AuthenticationResponse registerVendor(VendorRegisterRequest request) {
        if (isEmailExists(request.getEmailv())) {
            return new AuthenticationResponse(null, null, "Email Already Exist", "VENDOR");
        }

        UserVendor vendor = new UserVendor();
        vendor.setEmailv(request.getEmailv());
        vendor.setPasswordv(passwordEncoder.encode(request.getPasswordv()));
        vendor.setNamaVendorv(request.getNamaVendorv());
        vendor.setAlamatv(request.getAlamatv());
        vendor.setNomorTeleponv(request.getNomorTeleponv());
        vendor.setInstagramv(request.getInstagramv());
        vendor.setTiktokv(request.getTiktokv());
        vendor.setFacebookv(request.getFacebookv());
        vendor.setRole(UserVendor.Role.VENDOR);

        vendor = vendorRepository.save(vendor);

        String accessToken = jwtService.generateAccessToken(vendor);
        String refreshToken = jwtService.generateRefreshToken(vendor);

        saveVendorToken(accessToken, refreshToken, vendor);

        return new AuthenticationResponse(accessToken, refreshToken, "Vendor registration was successful", "VENDOR");
    }

    // public AuthenticationResponse authenticateWisat(UserWisat request) {
    //     try {
    //         authenticationManager
    //                 .authenticate(new UsernamePasswordAuthenticationToken(request.getEmailw(), request.getPasswordw()));
    //         UserWisat user = userWisatRepository.findByEmailw(request.getEmailw())
    //                 .orElseThrow(() -> new RuntimeException("User not found"));

    //         String accessToken = jwtService.generateAccessToken(user);
    //         String refreshToken = jwtService.generateRefreshToken(user);

    //         saveUserToken(accessToken, refreshToken, user);

    //         return new AuthenticationResponse(accessToken, refreshToken, "Login successful");
    //     } catch (Exception e) {
    //         return new AuthenticationResponse(null, null, "Invalid credentials");
    //     }
    // }

    // public AuthenticationResponse authenticateVendor(UserVendor requestvVendor) {
    //     try {
    //         // authenticationManager.authenticate(new
    //         // UsernamePasswordAuthenticationToken(requestvVendor.getEmailv(),
    //         // requestvVendor.getPasswordv()));
    //         // UserVendor vendor = vendorRepository.findByEmailv(requestvVendor.getEmailv())
    //         // .orElseThrow(() -> new RuntimeException("Vendor not found"));

    //         Optional<UserVendor> vendorOpt = vendorRepository.findByEmailv(requestvVendor.getEmailv());
    //         if (vendorOpt.isPresent()) {
    //             UserVendor vendor = vendorOpt.get();
    //             if (passwordEncoder.matches(requestvVendor.getPassword(), vendor.getPassword())) {

    //                 String accessToken = jwtService.generateAccessToken(vendor);
    //                 String refreshToken = jwtService.generateRefreshToken(vendor);

    //                 saveVendorToken(accessToken, refreshToken, vendor);

    //                 return new AuthenticationResponse(accessToken, refreshToken, "Login successful");
    //             } else {
    //                 return new AuthenticationResponse(null, null, "Password Is Wrong");
    //             }
    //         } else {
    //             return new AuthenticationResponse(null, null, "User Not Found");
    //         }
    //     } catch (Exception e) {
    //         return new AuthenticationResponse(null, null, e.getMessage());
    //     }
    // }

    public AuthenticationResponse authenticate(String email, String password) {
        Optional<UserWisat> wisatawanOpt = userWisatRepository.findByEmailw(email);
        if (wisatawanOpt.isPresent()) {
            UserWisat wisatawan = wisatawanOpt.get();
            if (passwordEncoder.matches(password, wisatawan.getPasswordw())) {
                String accessToken = jwtService.generateAccessToken(wisatawan);
                String refreshToken = jwtService.generateRefreshToken(wisatawan);
                saveUserToken(accessToken, refreshToken, wisatawan);
                return new AuthenticationResponse(accessToken, refreshToken, "Login successful", "WISATAWAN");
            } else {
                return new AuthenticationResponse(null, null, "Invalid credentials", "WISATAWAN");
            }
        }

        Optional<UserVendor> vendorOpt = vendorRepository.findByEmailv(email);
        if (vendorOpt.isPresent()) {
            UserVendor vendor = vendorOpt.get();
            if (passwordEncoder.matches(password, vendor.getPasswordv())) {
                String accessToken = jwtService.generateAccessToken(vendor);
                String refreshToken = jwtService.generateRefreshToken(vendor);
                saveVendorToken(accessToken, refreshToken, vendor);
                return new AuthenticationResponse(accessToken, refreshToken, "Login successful", "VENDOR");
            } else {
                return new AuthenticationResponse(null, null, "Invalid credentials", "VENDOR");
            }
        }

        return new AuthenticationResponse(null, null, "User not found", "VENDOR");
    }

    public Optional<UserWisat> getWisatawanByEmail(String emailw) {
        return userWisatRepository.findByEmailw(emailw);
    }

    public Optional<UserVendor> getVendorByEmail(String emailv) {
        return vendorRepository.findByEmailv(emailv);
    }

    public Optional<UserWisat> updateWisatawan(String emailw, UserWisat updatedUserWisat) {
        Optional<UserWisat> existingUserWisat = userWisatRepository.findByEmailw(emailw);
        if (existingUserWisat.isPresent()) {
            UserWisat userWisat = existingUserWisat.get();

            userWisat.setNamaLengkapw(updatedUserWisat.getNamaLengkapw());
            userWisat.setJenisKelaminw(updatedUserWisat.getJenisKelaminw());
            userWisat.setTanggalLahirw(updatedUserWisat.getTanggalLahirw());
            userWisat.setKotaw(updatedUserWisat.getKotaw());
            userWisat.setNomorTeleponw(updatedUserWisat.getNomorTeleponw());
            userWisat.setPhotow(updatedUserWisat.getPhotow()); // Optional jika ingin mengupdate foto

            userWisatRepository.save(userWisat);
            return Optional.of(userWisat);
        }
        return Optional.empty();
    }
    

    public Optional<UserVendor> updateVendorProfile(String emailv, UserVendor updatedUserVendor) {
        Optional<UserVendor> existingUserVendor = vendorRepository.findByEmailv(emailv);
        if (existingUserVendor.isPresent()) {
            UserVendor userVendor = existingUserVendor.get();

            userVendor.setNamaVendorv(updatedUserVendor.getNamaVendorv());
            userVendor.setAlamatv(updatedUserVendor.getAlamatv());
            userVendor.setNomorTeleponv(updatedUserVendor.getNomorTeleponv());
            userVendor.setInstagramv(updatedUserVendor.getInstagramv());
            userVendor.setTiktokv(updatedUserVendor.getTiktokv());
            userVendor.setFacebookv(updatedUserVendor.getFacebookv());
            userVendor.setDeskripsi(updatedUserVendor.getDeskripsi());
            userVendor.setPhotov(updatedUserVendor.getPhotov()); // Optional jika ingin mengupdate foto
            userVendor.setDocumentationv(updatedUserVendor.getDocumentationv()); // Optional jika ingin mengupdate dokumen

            vendorRepository.save(userVendor);
            return Optional.of(userVendor);
        }
        return Optional.empty();
    }
    

    public boolean deleteWisatawan(String email) {
        Optional<UserWisat> userWisat = userWisatRepository.findByEmailw(email);
        if (userWisat.isPresent()) {
            userWisatRepository.delete(userWisat.get());
            return true;
        }
        return false;
    }

    public boolean deleteVendor(String email) {
        Optional<UserVendor> userVendor = vendorRepository.findByEmailv(email);
        if (userVendor.isPresent()) {
            vendorRepository.delete(userVendor.get());
            return true;
        }
        return false;
    }

    public ResponseEntity<AuthenticationResponse> refreshToken(HttpServletRequest request,
            HttpServletResponse response) {
        // Implement refresh token logic here
        return null; // Change this implementation as per your requirement
    }

    private void saveUserToken(String accessToken, String refreshToken, UserWisat user) {
        TokenWisat token = new TokenWisat();
        token.setUser(user);
        token.setAccessToken(accessToken);
        token.setRefreshToken(refreshToken);
        tokenWisatRepository.save(token);
    }

    private void saveVendorToken(String accessToken, String refreshToken, UserVendor vendor) {
        TokenVend token = new TokenVend();
        token.setUser(vendor);
        token.setAccessToken(accessToken);
        token.setRefreshToken(refreshToken);
        tokenVendRepository.save(token);
    }
}
