package com.edu.senac.reciclagem.backend.application.mapper;

import com.edu.senac.reciclagem.backend.application.dto.users.UserRequest;
import com.edu.senac.reciclagem.backend.application.dto.users.UserResponse;
import com.edu.senac.reciclagem.backend.domain.entity.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {
    public User toDomain(UserRequest request){
        return new User(
                request.name(),
                request.birthDate(),
                request.email(),
                request.password()
        );
    }

    public UserResponse toResponse(User user){
        return new UserResponse(
                user.getId(),
                user.getName(),
                user.getBirthDate(),
                user.getEmail()
        );
    }
}
