package com.edu.senac.reciclagem.backend.infra.persistence;

import com.edu.senac.reciclagem.backend.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UserJpaRepository extends JpaRepository<User, UUID> {


}
