import React, { useState, useEffect } from "react";
import axios from "axios";
import StarWarsCard from "./Starwarscard"

function CardHolder(){

    const [CharInfo, setCharInfo] = useState([]);

    useEffect(() =>{
        axios.get(`https://swapi.co/api/
        `)
        .then(response =>{
            console.log(response);
            setCharInfo(response.data);
        })
        .catch(err =>{
            console.log('We messed up! We have to go back Marty!')
        })
    }, [])

    return(
        <div>
            <StarWarsCard name = {CharInfo.name} gender = {CharInfo.gender} homeworld = {CharInfo.homeworld} films = {CharInfo.films} birth-year = {CharInfo.birth_year}/>
        </div>
    )
}

export default CardHolder;