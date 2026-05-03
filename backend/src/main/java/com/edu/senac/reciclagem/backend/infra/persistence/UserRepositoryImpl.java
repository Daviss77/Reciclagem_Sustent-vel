package com.edu.senac.reciclagem.backend.infra.persistence;

import com.edu.senac.reciclagem.backend.application.port.UserRepositoryPort;
import com.edu.senac.reciclagem.backend.domain.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
@RequiredArgsConstructor
public class UserRepositoryImpl implements UserRepositoryPort {

    @Autowired
    private UserJpaRepository userJpaRepository;

    @Override
    public User save(User user) {
        return userJpaRepository.save(user);
    }

    @Override
    public Optional<User> findById(UUID id){
        return userJpaRepository.findById(id);
    }

    @Override
    public List<User> findAll(){
        return userJpaRepository.findAll();
    }

    @Override
    public void deleteById(UUID id) {
        userJpaRepository.deleteById(id);
    }


}
