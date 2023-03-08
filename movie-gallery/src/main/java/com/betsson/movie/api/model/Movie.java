package com.betsson.movie.api.model;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Movie {
    private int id;
    private String key;
    private String name;
    private String description;
    private String[] genres;
    private String rate;
    private String length;
    private String img;
}
