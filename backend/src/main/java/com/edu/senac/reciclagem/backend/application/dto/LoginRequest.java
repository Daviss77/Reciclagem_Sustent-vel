package com.edu.senac.reciclagem.backend.application.dto;

import com.edu.senac.reciclagem.backend.domain.entity.Role;

import java.util.UUID;

public record LoginRequest(
        UUID id,
        String email,
        String password,
        Role role
) {
}
