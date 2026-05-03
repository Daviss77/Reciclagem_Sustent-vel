package com.edu.senac.reciclagem.backend.application.dto;

import java.time.LocalDate;

public record UserRequest (
        String name,
        LocalDate birthDate,
        String email,
        String password
){}
