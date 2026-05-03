package com.edu.senac.reciclagem.backend.application.usecase.user;

import com.edu.senac.reciclagem.backend.application.dto.UserRequest;
import com.edu.senac.reciclagem.backend.application.dto.UserResponse;
import com.edu.senac.reciclagem.backend.application.mapper.UserMapper;
import com.edu.senac.reciclagem.backend.application.port.UserRepositoryPort;
import com.edu.senac.reciclagem.backend.domain.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CreateUserUseCase {

    private final UserRepositoryPort repository;
    private final UserMapper mapper;

    public UserResponse execute(UserRequest request) {
        if(repository.existsByEmail(request.email())){
            throw new IllegalArgumentException("Email ja cadastrado");
        }

        User user = mapper.toDomain(request);
        User savedUser = repository.save(user);

        return mapper.toResponse(savedUser);
    }


}
