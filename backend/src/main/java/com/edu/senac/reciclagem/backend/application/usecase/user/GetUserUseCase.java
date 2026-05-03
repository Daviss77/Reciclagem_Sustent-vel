package com.edu.senac.reciclagem.backend.application.usecase.user;

import com.edu.senac.reciclagem.backend.application.dto.UserResponse;
import com.edu.senac.reciclagem.backend.application.mapper.UserMapper;
import com.edu.senac.reciclagem.backend.application.port.UserRepositoryPort;
import com.edu.senac.reciclagem.backend.domain.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class GetUserUseCase {

    private final UserRepositoryPort repository;
    private final UserMapper mapper;

    public UserResponse findById(UUID id){
        User user = repository.findById(id).orElseThrow(() -> new IllegalArgumentException("Usuário não encontrado"));

        return mapper.toResponse(user);
    }

    public List<UserResponse> findAll(){
        return repository.findAll()
                .stream()
                .map(mapper::toResponse)
                .toList();
    }

}
