// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    display:flex;
    align-self:auto;
    justify-content:space-evenly;
`

const StyledName = styled.h2`
    color:blue;
    display:flex;
    align-items:center;
    background-color:tan;
    border-radius:15px;
`

const StyledInfo = styled.h4`
    color:skyblue;
    background-color:tan;
    border-radius: 15px;
`

export default function Character({ data }) {
    const {name, height, mass, eye_color, gender, birth_year} = data;
    
    return (
        <StyledDiv className="char-info">
            <StyledName>
                Name: {data.name}
            </StyledName>
            <StyledInfo>
                <span className="char-details">
                    Birth year: {birth_year}
                    <br></br>
                    Gender: {gender}
                    <br></br>
                    Height: {height}
                    <br></br>
                    Mass: {mass}
                    <br></br>
                    Eyes: {eye_color}
                    <br></br>
                </span>
            </StyledInfo>
        </StyledDiv>
    )
}