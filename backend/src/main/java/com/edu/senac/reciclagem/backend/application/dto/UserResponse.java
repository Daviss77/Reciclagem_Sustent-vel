package com.edu.senac.reciclagem.backend.application.dto;

import java.time.LocalDate;
import java.util.UUID;

public record UserResponse(
        UUID id,
        String name,
        LocalDate birthDate,
        String email
){}
