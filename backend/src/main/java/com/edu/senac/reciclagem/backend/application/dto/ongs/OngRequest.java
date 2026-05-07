package com.edu.senac.reciclagem.backend.application.dto.ongs;

public record OngRequest(
        String name,
        String description,
        String email,
        String phone,
        String address,
        String imageUrl
) {}
