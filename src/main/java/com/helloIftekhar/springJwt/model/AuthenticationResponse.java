package com.helloIftekhar.springJwt.model;

public class AuthenticationResponse {
    private String accessToken;
    private String refreshToken;
    private String message;
    private String userType;

    // Konstruktor, Getter, dan Setter
    public AuthenticationResponse(String accessToken, String refreshToken, String message, String userType) {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
        this.message = message;
        this.userType = userType;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public String getRefreshToken() {
        return refreshToken;
    }

    public void setRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }
}
