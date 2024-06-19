package com.helloIftekhar.springJwt.model;

public enum StatusTransaksi {
    IN_PROGRESS("Proses"),
    COMPLETED("Berhasil"),
    CANCELED("Batal");

    private final String displayName;

    StatusTransaksi(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }
}
