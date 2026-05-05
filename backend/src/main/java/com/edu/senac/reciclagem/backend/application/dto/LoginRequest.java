package com.edu.senac.reciclagem.backend.application.dto;

public record LoginRequest(
        String email,
        String password
) {
}
