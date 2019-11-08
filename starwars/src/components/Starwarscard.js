import React from "react";
import styled from "styled-components";

const StarWarsCard = props =>{
    return(
        <div className="BodyCard">
            <div className="CharCard">
            <h2>Name: {props.name}</h2>
                <div className="centerCont">
                <p>Film(s): {props.films}</p>
                <p>Gender: {props.gender}</p>
                <p>Height: {props.height}</p>
                <p>Birth Year: {props.birth_year}</p>
                </div>
            </div>
        </div>
    )
}

export default StarWarsCard;