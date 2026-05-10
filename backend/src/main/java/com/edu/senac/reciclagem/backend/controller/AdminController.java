package com.edu.senac.reciclagem.backend.controller;

import com.edu.senac.reciclagem.backend.application.dto.users.UserResponse;
import com.edu.senac.reciclagem.backend.application.usecase.user.DeleteUserUseCase;
import com.edu.senac.reciclagem.backend.application.usecase.user.GetUserUseCase;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/adminss")
@RequiredArgsConstructor
public class AdminController {

    private final GetUserUseCase getUserUseCase;
    private final DeleteUserUseCase deleteUserUseCase;

    @GetMapping("/users")
    public ResponseEntity<List<UserResponse>> findAll(){
        return ResponseEntity.ok(getUserUseCase.findAll());
    }

    @GetMapping("/users/search")
    public ResponseEntity<UserResponse> findByEmail(@RequestParam String email){
        return ResponseEntity.ok(getUserUseCase.findByEmail(email));
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable UUID id){
        deleteUserUseCase.execute(id);
        return ResponseEntity.noContent().build();
    }
}
