package com.edu.senac.reciclagem.backend.application.port;

import com.edu.senac.reciclagem.backend.domain.entity.User;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface UserRepositoryPort {
    User save(User user);
    Optional<User> findById(UUID id);
    List<User> findAll();
    void deleteById(UUID id);

}
