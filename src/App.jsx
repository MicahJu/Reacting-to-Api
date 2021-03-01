import userEvent from "@testing-library/user-event";
import {useEffect, useState } from "react";

const App = () => {


    useEffect(()=> {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => resjson())
        .then(allFilms => setFilms(allFilms))
    },[]);

    useEffect(()=> {
        fetch('https://ghibliapi.herokuapp.com/people')
        .then(res => resjson())
        .then(allPeople => setPeople(allPeople))
    },[]);



    return (
        <main className="container">
            <section className="row justify-content-center mt-5">
                {films.map(films => (
                   <div className="col-md-6" key={`user-card-${films.id}`}>
                       <div className="card shadow my-2">
                           <div className="card-body">
                               <h4 className="card-title">{films.filmname}</h4>
                               <p className="card-subtitle text-muted">{films.filmname}</p>
                           </div>   
                        </div> 
                   </div>
                ))}
            </section>
         </main>
    );
};

export default App;