package com.betsson.movie.api.service;

import com.betsson.movie.api.exceptions.MovieNotFoundException;
import com.betsson.movie.api.model.Movie;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.*;
import java.util.stream.Collectors;


@Service
public class MovieService {

    private List<Movie> movies = new ArrayList<>();

    @Autowired
    public MovieService(ObjectMapper objectMapper) {
        try {
            String movieJSON = "mock-data.json";
            File jsonFile = new ClassPathResource(movieJSON).getFile();
            String content = new String(Files.readAllBytes(jsonFile.toPath()));

            movies = Arrays.asList(objectMapper.readValue(content, Movie[].class));
        } catch (IOException e){
            e.printStackTrace();
        }
    }

    public List<Movie> getAllMovies() {
        return movies;
    }

    public Movie getMovie(final int id) {
        List<Movie> search = movies.stream()
                .filter(m -> m.getId() == id)
                .toList();

        if(search.isEmpty()){
            throw new MovieNotFoundException("id-"+id);
        }

        return search.get(0);
    }
}
