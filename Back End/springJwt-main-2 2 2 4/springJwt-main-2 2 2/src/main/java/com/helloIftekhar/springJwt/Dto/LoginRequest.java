package com.helloIftekhar.springJwt.Dto;

public class LoginRequest {
    private String email;
    private String password;
    private String userType; // This will be filled after fetching from DB

    public LoginRequest(String email, String password, String userType) {
        this.email = email;
        this.password = password;
        this.userType = userType;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }

    // Getters and Setters
}
