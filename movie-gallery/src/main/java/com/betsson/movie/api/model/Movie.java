package com.betsson.movie.api.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Employee {
    @Id
    private int id;
    private String key;
    private String name;
    private String description;
    private String[] genres;
    private String rate;
    private String length;
    private String img;
}
