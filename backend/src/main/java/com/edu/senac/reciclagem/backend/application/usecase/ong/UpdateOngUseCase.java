package com.edu.senac.reciclagem.backend.application.usecase.ong;

import com.edu.senac.reciclagem.backend.application.dto.ongs.OngRequest;
import com.edu.senac.reciclagem.backend.application.dto.ongs.OngResponse;
import com.edu.senac.reciclagem.backend.application.port.OngRepositoryPort;
import com.edu.senac.reciclagem.backend.domain.entity.Ong;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UpdateOngUseCase {

    private final OngRepositoryPort repository;

    public OngResponse execute(UUID id, OngRequest ongRequest){
        Ong ong = repository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("ONG não encontrada"));
        ong.setName(ongRequest.name());
        ong.setDescription(ongRequest.description());
        ong.setEmail(ongRequest.email());
        ong.setPhone(ongRequest.phone());
        ong.setAddress(ongRequest.address());
        ong.setImageUrl(ongRequest.imageUrl());

        Ong update = repository.save(ong);
        return new OngResponse(update.getId(), update.getName(), update.getDescription(), update.getEmail(), update.getPhone(), update.getAddress(), update.getImageUrl());
    }
}
