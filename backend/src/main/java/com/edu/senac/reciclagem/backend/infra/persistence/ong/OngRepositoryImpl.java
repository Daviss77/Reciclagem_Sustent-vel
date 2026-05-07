package com.edu.senac.reciclagem.backend.infra.persistence.ong;

import com.edu.senac.reciclagem.backend.application.port.OngRepositoryPort;
import com.edu.senac.reciclagem.backend.domain.entity.Ong;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
@RequiredArgsConstructor
public class OngRepositoryImpl  implements OngRepositoryPort {

    private final OngJpaRepository jpaRepository;

    @Override
    public Ong save(Ong ong){
        return jpaRepository.save(ong);
    }

    @Override
    public Optional<Ong> findById(UUID id){
        return jpaRepository.findById(id);
    }

    @Override
    public List<Ong> findAll(){
        return jpaRepository.findAll();
    }

    @Override
    public List<Ong> findByNameContaining(String name){
        return jpaRepository.findByNameContainingIgnoreCase(name);
    }

    @Override
    public void deleteById(UUID id){
        jpaRepository.deleteById(id);
    }
}
