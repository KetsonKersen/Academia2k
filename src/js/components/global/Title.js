import React from "react";
import styled , { css} from "styled-components";
import bgTitle from "../../../assets/overlays/markV.png"

export default function Title(props){
    const Span = styled.span`
    min-width: 40rem;
    padding: 1rem;
    font-size: 2rem;
    text-align: center;
    position: relative;
    color: white;
    ::after{
        content: '';
        width: 100%;
        height: 100%;
        background-image: url(${bgTitle});
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }
    @media ${`(max-width: 400px)`}{
        min-width: 30rem;
    }
    ${props.theme == "light" && css`
        color: black;
        ::after{
            filter: brightness(0) invert(1);
        }
    `}

`;
    return <Span>{props.txt}</Span>
}