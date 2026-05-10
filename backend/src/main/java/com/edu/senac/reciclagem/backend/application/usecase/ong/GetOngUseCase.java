package com.edu.senac.reciclagem.backend.application.usecase.ong;

import com.edu.senac.reciclagem.backend.application.dto.ongs.OngRequest;
import com.edu.senac.reciclagem.backend.application.dto.ongs.OngResponse;
import com.edu.senac.reciclagem.backend.application.port.OngRepositoryPort;
import com.edu.senac.reciclagem.backend.domain.entity.Ong;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class GetOngUseCase {

    private final OngRepositoryPort repository;

    public List<OngResponse> findAll(){
        return repository.findAll().stream().map(this::toResponse).toList();
    }

    public List<OngResponse> findByName(String name){
        return repository.findByNameContaining(name).stream().map(this::toResponse).toList();
    }

    public OngResponse findById(UUID id){
        Ong ong = repository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("ONG não encontrada"));
        return toResponse(ong);
    }

    private OngResponse toResponse(Ong ong){
        return new OngResponse(ong.getId(), ong.getName(), ong.getDescription(), ong.getEmail(), ong.getPhone(), ong.getAddress(), ong.getImageUrl());
    }
}
