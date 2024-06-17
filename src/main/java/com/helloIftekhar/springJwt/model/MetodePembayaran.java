package com.helloIftekhar.springJwt.model;

public enum MetodePembayaran {
    CASH("Cash"),
    CREDIT_CARD("Credit Card"),
    DEBIT_CARD("Debit Card"),
    BANK_TRANSFER("Bank Transfer");

    private final String displayName;

    MetodePembayaran(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }
}
