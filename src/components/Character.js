// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    display:flex;
    align-items:center;
`

const StyledName = styled.h2`
    color:blue;
`

const StyledInfo = styled.h4`
    color:skyblue;
`

export default function Character({ data }) {
    const {name, height, mass, eye_color, gender, birth_year} = data;
    
    return (
        <StyledDiv className="char-info">
            <StyledName>
                Name: {data.name}
            </StyledName>
            <br></br>
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