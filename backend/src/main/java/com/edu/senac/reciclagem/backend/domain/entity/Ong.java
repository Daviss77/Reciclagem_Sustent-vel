package com.edu.senac.reciclagem.backend.domain.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.UuidGenerator;

import java.util.UUID;

@Entity
@Table(name = "ongs")
@Getter
@Setter
@NoArgsConstructor
public class Ong {
    @Id
    @GeneratedValue
    @UuidGenerator(style = UuidGenerator.Style.TIME)
    private UUID id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String phone;

    @Column(nullable = false)
    private String address;

    @Column
    private String imageUrl;

    public Ong(String name, String description, String email, String phone, String address, String imageUrl) {
        this.name = name;
        this.description = description;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.imageUrl = imageUrl;
    }
}
