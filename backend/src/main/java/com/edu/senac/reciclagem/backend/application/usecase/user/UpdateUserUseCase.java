package com.edu.senac.reciclagem.backend.application.usecase.user;

import com.edu.senac.reciclagem.backend.application.dto.UserRequest;
import com.edu.senac.reciclagem.backend.application.dto.UserResponse;
import com.edu.senac.reciclagem.backend.application.mapper.UserMapper;
import com.edu.senac.reciclagem.backend.application.port.UserRepositoryPort;
import com.edu.senac.reciclagem.backend.domain.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UpdateUserUseCase {
    private final UserRepositoryPort repository;
    private final UserMapper mapper;

    public UserResponse execute(UUID id, UserRequest request){
        User user = repository.findById(id).orElseThrow(() -> new IllegalArgumentException("Usuario não encontrado"));

        user.setName(request.name());
        user.setBirthDate(request.birthDate());
        user.setEmail(request.email());

        User updatedUser = repository.save(user);
        return mapper.toResponse(updatedUser);
    }
}
