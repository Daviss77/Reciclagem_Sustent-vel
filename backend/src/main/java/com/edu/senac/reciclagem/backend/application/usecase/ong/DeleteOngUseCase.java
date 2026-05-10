package com.edu.senac.reciclagem.backend.application.usecase.ong;

import com.edu.senac.reciclagem.backend.application.port.OngRepositoryPort;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class DeleteOngUseCase {

    private final OngRepositoryPort repository;

    public void execute(UUID id){
        repository.findById(id).
                orElseThrow(()->new IllegalArgumentException("ID inexistente"));
        repository.deleteById(id);
    }
}
