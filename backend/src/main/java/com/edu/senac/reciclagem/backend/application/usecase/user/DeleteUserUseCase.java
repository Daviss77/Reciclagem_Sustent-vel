package com.edu.senac.reciclagem.backend.application.usecase.user;

import com.edu.senac.reciclagem.backend.application.port.UserRepositoryPort;
import com.edu.senac.reciclagem.backend.infra.persistence.UserJpaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class DeleteUserUseCase {

    private final UserRepositoryPort repository;

    public void execute(UUID id){
        if(!repository.findById(id).isPresent()){
            throw new IllegalArgumentException("Usuário não encontrado");
        }
        repository.deleteById(id);
    }

}
