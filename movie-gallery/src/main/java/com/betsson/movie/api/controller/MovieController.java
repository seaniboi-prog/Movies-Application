package com.betsson.movie.api.controller;

import com.betsson.movie.api.model.Movie;
import com.betsson.movie.api.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1")
public class MovieController {

    private final MovieService movieService;
    @Autowired
    public MovieController(MovieService movieService){
        this.movieService = movieService;
    }

    @CrossOrigin("http://localhost:3000")
    @GetMapping("/movies")
    public List<Movie> getAll(){
        return movieService.getAllMovies();
    }


    @CrossOrigin("http://localhost:3000")
    @GetMapping("/movie/{movieID}")
    public Movie getMovie(@PathVariable int movieID){
        return movieService.getMovie(movieID);
    }

    @GetMapping("/hey")
    public String hello(){
        return "Hello";
    }
}
