package com.edu.senac.reciclagem.backend.application.port;

import com.edu.senac.reciclagem.backend.domain.entity.Ong;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface OngRepositoryPort {
    Ong save(Ong ong);
    Optional<Ong> findById(UUID id);
    List<Ong> findAll();
    List<Ong> findByNameContaining(String name);
    void deleteById(UUID id);

}
