package com.edu.senac.reciclagem.backend.controller;

import com.edu.senac.reciclagem.backend.application.dto.LoginRequest;
import com.edu.senac.reciclagem.backend.application.dto.LoginResponse;
import com.edu.senac.reciclagem.backend.application.dto.users.UserRequest;
import com.edu.senac.reciclagem.backend.application.dto.users.UserResponse;
import com.edu.senac.reciclagem.backend.application.usecase.user.LoginUseCase;
import com.edu.senac.reciclagem.backend.application.usecase.user.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController
{
    private final CreateUserUseCase createUserUseCase;
    private final GetUserUseCase getUserUseCase;
    private final UpdateUserUseCase updateUserUseCase;
    private final DeleteUserUseCase deleteUserUseCase;
    private final LoginUseCase loginUseCase;

    @PostMapping
    public ResponseEntity<UserResponse> create(@RequestBody UserRequest request){
        UserResponse response = createUserUseCase.execute(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request){
        return ResponseEntity.ok(loginUseCase.execute(request));
    }

    @GetMapping
    public ResponseEntity<List<UserResponse>> findAll(){
        return ResponseEntity.ok(getUserUseCase.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserResponse> findById(@PathVariable UUID id){
        return ResponseEntity.ok(getUserUseCase.findById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserResponse> update(@PathVariable UUID id, @RequestBody UserRequest request){
        return ResponseEntity.ok(updateUserUseCase.execute(id,request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable UUID id){
        deleteUserUseCase.execute(id);
        return ResponseEntity.noContent().build();
    }
}
