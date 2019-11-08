import React, { useState, useEffect } from "react";
import axios from "axios";
import StarWarsCard from "./Starwarscard";
import {Container, Row} from "reactstrap";

export default function CardHolder(){

    const [CharInfo, setCharInfo] = useState([]);

    useEffect(() =>{
        axios
        .get(`https://swapi.co/api/people/`)
        .then(response =>{
            console.log(response.data.results);
            setCharInfo(response.data.results);
        })
        .catch(err =>{
            console.log('We messed up! We have to go back Marty!')
        });
    }, []);

    return(
        <div>
            {CharInfo.map(item => {

                console.log(item.name)

                return(
                <div className ="container">
                    <div className="row">
                        <div className ="col">
                        <StarWarsCard 
                        name = {item.name} 
                        gender = {item.gender} 
                        height = {item.height}
                        films = {item.films.length} 
                        birth_year = {item.birth_year}
                        />
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
    );
}