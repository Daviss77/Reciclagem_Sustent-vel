package com.edu.senac.reciclagem.backend.infra.persistence.ong;

import com.edu.senac.reciclagem.backend.domain.entity.Ong;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface OngJpaRepository extends JpaRepository<Ong, UUID> {
    List<Ong> findByNameContainingIgnoreCase(String name);
}
