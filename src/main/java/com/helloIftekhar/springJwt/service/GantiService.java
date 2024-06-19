package com.helloIftekhar.springJwt.service;

import com.helloIftekhar.springJwt.model.UserWisat;
import com.helloIftekhar.springJwt.model.UserVendor;
import com.helloIftekhar.springJwt.repository.UserWisatRepository;
import com.helloIftekhar.springJwt.repository.UserVendorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class GantiService {

    @Autowired
    private UserWisatRepository userWisatRepository;

    @Autowired
    private UserVendorRepository userVendorRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Optional<UserWisat> findWisatByEmail(String email) {
        return userWisatRepository.findByEmailw(email);
    }

    public Optional<UserVendor> findVendorByEmail(String email) {
        return userVendorRepository.findByEmailv(email);
    }

    public void updateWisatPassword(UserWisat user, String newPassword) {
        user.setPasswordw(passwordEncoder.encode(newPassword));
        userWisatRepository.save(user);
    }

    public void updateVendorPassword(UserVendor user, String newPassword) {
        user.setPasswordv(passwordEncoder.encode(newPassword));
        userVendorRepository.save(user);
    }
}
