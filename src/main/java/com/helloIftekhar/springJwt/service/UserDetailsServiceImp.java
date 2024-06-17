package com.helloIftekhar.springJwt.service;

import com.helloIftekhar.springJwt.repository.UserWisatRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImp implements UserDetailsService {

    private final UserWisatRepository repository;

    public UserDetailsServiceImp(UserWisatRepository repository) {
        this.repository = repository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return repository.findByEmailw(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }


}
