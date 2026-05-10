package com.edu.senac.reciclagem.backend.application.dto;

import com.edu.senac.reciclagem.backend.domain.entity.Role;

import java.util.UUID;

public record LoginResponse(
        UUID id,
        String name,
        String email,
        Role role
){}
