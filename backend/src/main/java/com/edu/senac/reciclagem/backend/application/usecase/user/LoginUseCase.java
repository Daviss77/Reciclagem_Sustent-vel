package com.edu.senac.reciclagem.backend.application.usecase.user;

import com.edu.senac.reciclagem.backend.application.dto.LoginResponse;
import com.edu.senac.reciclagem.backend.application.dto.LoginRequest;
import com.edu.senac.reciclagem.backend.application.port.UserRepositoryPort;
import com.edu.senac.reciclagem.backend.domain.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LoginUseCase {

    private final UserRepositoryPort repository;

    public LoginResponse execute(LoginRequest request){
        User user = repository.findByEmail(request.email())
                .orElseThrow(() -> new IllegalArgumentException("E-mail ou senha inválidos"));

        if (!user.getPassword().equals(request.password())){
            throw new IllegalArgumentException("E-mail ou senha inválidos");
        }

        return new LoginResponse(
                user.getId(),
                user.getName(),
                user.getEmail(),
                user.getRole()
        );
    }
}
