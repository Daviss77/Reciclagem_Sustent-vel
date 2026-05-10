package com.edu.senac.reciclagem.backend.controller;

import com.edu.senac.reciclagem.backend.application.dto.ongs.OngRequest;
import com.edu.senac.reciclagem.backend.application.dto.ongs.OngResponse;
import com.edu.senac.reciclagem.backend.application.usecase.ong.CreateOngUseCase;
import com.edu.senac.reciclagem.backend.application.usecase.ong.DeleteOngUseCase;
import com.edu.senac.reciclagem.backend.application.usecase.ong.GetOngUseCase;
import com.edu.senac.reciclagem.backend.application.usecase.ong.UpdateOngUseCase;
import com.edu.senac.reciclagem.backend.domain.entity.Ong;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/ongs")
@RequiredArgsConstructor
public class OngController {

    private final CreateOngUseCase createOngUseCase;
    private final GetOngUseCase getOngUseCase;
    private final UpdateOngUseCase updateOngUseCase;
    private final DeleteOngUseCase deleteOngUseCase;

    @PostMapping
    public ResponseEntity<OngResponse> createOng(@RequestBody OngRequest request){
        return ResponseEntity.status(HttpStatus.CREATED).body(createOngUseCase.execute(request));
    }

    @GetMapping
    public ResponseEntity<List<OngResponse>> findAll(@RequestParam(required = false) String name){
        if (name != null && !name.isBlank()){
            return ResponseEntity.ok(getOngUseCase.findByName(name));
        }
        return ResponseEntity.ok(getOngUseCase.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<OngResponse> findById(@PathVariable UUID id){
        return ResponseEntity.ok(getOngUseCase.findById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<OngResponse> update(@PathVariable UUID id, @RequestBody OngRequest request){
        return ResponseEntity.ok(updateOngUseCase.execute(id,request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<OngResponse> delete(@PathVariable UUID id){
        deleteOngUseCase.execute(id);
        return ResponseEntity.noContent().build();
    }
}
