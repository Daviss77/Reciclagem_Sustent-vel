package com.edu.senac.reciclagem.backend.application.dto.ongs;

import java.util.UUID;

public record OngResponse(
        UUID id,
        String name,
        String description,
        String email,
        String phone,
        String address,
        String imageUrl
) {
}
