# Movie Gallery Application - Frontend Approach

## About the app

The app consists of two pages:
- Main page
- Details page

#### Main Page
In this page all the movies are listed next to each other. A search bar is provided in order to search any specific movie. Moreover, a dropdown menu next to the search bar is also given, which filters the given list depending on the genre selected.

If a movie thumbnail is clicked, the application will redirect the user to the details page of that specific movie.

#### Details Page
This page consists of all the details of a chosen movie, these include the movie name, image, description, rating, genres and length. A home button is also provided in the navigation bar, to redirect the user back to the main page.

## Cloning the repo

Run the following commands:
```
git clone https://github.com/seaniboi-prog/Movies-Application.git
cd Movie-Application
```

## How to test app

Requirements:
- node version 18.14.2

Run the following commands:
```
cd Frontend_Application
npm test
```

## How to build/run Fullstack app

Make sure you are in master branch
```
git checkout master
```
#### Setup Backend
Requirements:
- maven version 3.9.0 with Java version 17
- docker daemon running

Run the following commands from **Movie-Application** directory:
```
cd movie-gallery
mvn spring-boot:build-image
docker run -d -p 8080:8080 movie-spring-image:latest
```
#### Setup Frontend
Requirements:
- docker daemon running

Go back to **Movie-Application** directory and run the following:
```
cd Frontend_Application
docker build -t movie/react-app .
docker run -d -p 3000:3000 movie/react-app
```

#### Go to localhost

Once both backend and frontend applications are up and running, go to [localhost:3000](http://localhost:3000).


## How to build/run Frontend app

If you wish to try out the application with frontend only, do the following:

```
git checkout frontend-approach
cd Frontend_Application
docker build -t movie/frontend-react-app .
docker run -d -p 3000:3000 movie/frontend-react-app
```