package com.edu.senac.reciclagem.backend.application.usecase.ong;

import com.edu.senac.reciclagem.backend.application.dto.ongs.OngRequest;
import com.edu.senac.reciclagem.backend.application.dto.ongs.OngResponse;
import com.edu.senac.reciclagem.backend.application.port.OngRepositoryPort;
import com.edu.senac.reciclagem.backend.domain.entity.Ong;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CreateOngUseCase {

    private final OngRepositoryPort repository;

    public OngResponse execute(OngRequest ongRequest){
        Ong ong = new Ong(
                ongRequest.name(), ongRequest.description(), ongRequest.email(),
                ongRequest.phone(), ongRequest.address(), ongRequest.imageUrl()
        );
        Ong saved = repository.save(ong);
        return toResponse(saved);
    }

    private OngResponse toResponse(Ong ong){
        return new OngResponse(ong.getId(), ong.getName(), ong.getDescription(), ong.getEmail(), ong.getAddress(), ong.getPhone(), ong.getImageUrl());
    }

}
