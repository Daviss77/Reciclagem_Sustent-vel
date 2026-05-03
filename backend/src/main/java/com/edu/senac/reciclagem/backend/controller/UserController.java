package com.edu.senac.reciclagem.backend.controller;

import com.edu.senac.reciclagem.backend.application.dto.UserRequest;
import com.edu.senac.reciclagem.backend.application.dto.UserResponse;
import com.edu.senac.reciclagem.backend.application.usecase.user.CreateUserUseCase;
import com.edu.senac.reciclagem.backend.application.usecase.user.DeleteUserUseCase;
import com.edu.senac.reciclagem.backend.application.usecase.user.GetUserUseCase;
import com.edu.senac.reciclagem.backend.application.usecase.user.UpdateUserUseCase;
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

    @PostMapping
    public ResponseEntity<UserResponse> create(@RequestBody UserRequest request){
        UserResponse response = createUserUseCase.execute(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
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
    public ResponseEntity<UserResponse> delete(@PathVariable UUID id){
        deleteUserUseCase.execute(id);
        return ResponseEntity.noContent().build();
    }
}
