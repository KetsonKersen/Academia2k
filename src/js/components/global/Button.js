import React from "react";
import styled , { css } from "styled-components";
import chevron from "../../../assets/Icons/double-chevron.png"



export default function Button(props){
    const Btn = styled.a`
        width: 20rem;
        height: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        font-size: 2rem;
        background-color: #ff0336;
        color:white;
        position: relative;
        transform: translate(0 , -.4rem);
        transition: linear .2s;
    :before{
        content: '';
        width: 100%;
        height: 100%;
        display: block;
        border: 1px solid #ff0336;
        position: absolute;
        transform: translate(.7rem , .7rem);
        transition: linear .2s;
    }
    ::after{
        content: '';
        width: 2rem;
        height: 2rem;
        background-image: url(${chevron});
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        filter: invert(1)
    }
    :hover::before{
        transform: translate(.03rem , .03rem);
    }
    :hover{
        gap: 2rem;
    }
        ${props.theme == "light" && css`
            background-color:white;
            color:black;
            ::before{
                border-color: white;
            }
            ::after{
                filter: invert(0)
            }
        `}

    `;
    return(
        <Btn  onClick={()=>props.function()} id={props.id}>{props.txt}</Btn>
    )
}