import React from "react";
import styled from "styled-components";
import Title from "../global/Title";


// IMPORT OVERLAYS
import trainerBg from "../../../assets/overlays/trainer-bg.png"
import up from "../../../assets/overlays/up.png"
// IMPORT OVERLAYS

// IMPORT ICONS
import upChevron from "../../../assets/Icons/chevron-up-solid.svg"
import {FaFacebookSquare , FaTiktok , FaInstagram} from "react-icons/fa"
// IMPORT ICONS

// IMPORT FOTOS
import Carlos from "../../../assets/photos/carlos.png"
import Cintia from "../../../assets/photos/cintia.png"
import Pedro from "../../../assets/photos/pedro.png"
import Julia from "../../../assets/photos/julia.png"
// IMPORT FOTOS

const ConteinerTxt = styled.div`
    width: 100%;
    margin: 8rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h3{
        font-size: 3rem;
        margin: 2rem 0;
    }
    @media ${`(max-width: 768px)`}{
        text-align: center;
        padding: 0 2%;
    }
`;

const  ContainerTeam =  styled.div`
    width: 100%;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;

    .professor{
        width: 30rem;
        min-width: 30rem;
        height: 100%;
    }
    .professor .foto{
        width: 30rem;
        height:30rem;
        position: relative;
    }
    .professor .foto::before{
        content: '';
        width: 100%;
        height: 100%;
        background-image: url(${trainerBg});
        background-size: cover;
        background-position: top;
        position: absolute;
        top: 0;
        left: 0;
    }
    .professor .foto::after{
        content: '';
        width: 100%;
        height: 90%;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        position: absolute;
        bottom: 0;
        left: 0;
        filter: grayscale(1);
        transition: .3s;
    }
    .professor:hover .foto::after{
        filter: grayscale(0);
        height: 100%;
    }
    .professor:nth-of-type(1) .foto::after{
        background-image: url(${Carlos});
    }
    .professor:nth-of-type(2) .foto::after{
        background-image: url(${Cintia});
    }
    .professor:nth-of-type(3) .foto::after{
        background-image: url(${Pedro});
    }
    .professor:nth-of-type(4) .foto::after{
        background-image: url(${Julia});
    }
    .professor .descricao{
        width: 100%;
        padding-bottom: 2rem;
        position: relative;
        padding-top: 2rem;
        border-radius: 1rem;
        box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.5);
        display: inline-block;
    }
    .professor .descricao::before{
        content: '';
        width: 10rem;
        height: 3rem;
        position: absolute;
        top: .1rem;
        left: 50%;
        transform: translate(-50% , -100%);
        background-image: url(${up});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: bottom;
    }
    .professor .descricao p{
        font-size: 2rem;
        font-weight: 600;
    }
    .professor .descricao p:last-of-type{
        font-size: 1.8rem;
        font-weight: 400;
        margin-top: .5rem;
        color: #CCC;
    }
    .professor .descricao p:first-of-type:before{
        content: '';
        width: 3rem;
        height: 3rem;
        background-image: url(${upChevron});
        background-size: 70%;
        background-repeat: no-repeat;
        background-position: center;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50% , -50%);

    }
    .professor .descricao div{
        display: flex;
        justify-content: center;
        margin-top: 2rem;
        gap: 2rem;
    }
    .professor .descricao div a{
        font-size: 2.4rem;
        color: #2b2b2b;
    }
    .professor .descricao div a:hover{
        transform: scale(110%);
        color: #ff0336;
    }
    @media ${`(max-width: 768px)`}{
        justify-content: center;
    }
    @media ${`(max-width: 1024px)`}{
        justify-content: center;
        gap: 0 10rem;
    }
`;

export default function Team(props){
    const Section = props.section
    const Container = props.container

    return(
        <Section id="team">
            <Container>
                <ConteinerTxt>
                    <Title txt="NOSSA EQUIPE"/>
                    <h3>Equipe de treinadores especialistas</h3>
                    <p>Equipe especializada de treinadores ajuda você a ter sucesso em qualquer objetivo,orientação personalizada e motivação fornecida! </p>
                </ConteinerTxt>
                <ContainerTeam>
                        <div className="professor">
                            <div className="foto"></div>
                            <div className="descricao">
                                <p>Carlos Souza</p>
                                <p>Personal trainer</p>
                                <div>
                                    <a href="#"><FaInstagram/></a>
                                    <a href="#"><FaFacebookSquare/></a>
                                    <a href="#"><FaTiktok/></a>
                                </div>
                            </div>
                        </div>
                        <div className="professor">
                            <div className="foto"></div>
                            <div className="descricao">
                                <p>Cintia Vital</p>
                                <p>Professora de CrossFit</p>
                                <div>
                                    <a href="#"><FaInstagram/></a>
                                    <a href="#"><FaFacebookSquare/></a>
                                    <a href="#"><FaTiktok/></a>
                                </div>
                            </div>
                        </div>
                        <div className="professor">
                            <div className="foto"></div>
                            <div className="descricao">
                                <p>Pedro Diniz</p>
                                <p>Prf. de artes marciais</p>
                                <div>
                                    <a href="#"><FaInstagram/></a>
                                    <a href="#"><FaFacebookSquare/></a>
                                    <a href="#"><FaTiktok/></a>
                                </div>
                            </div>
                        </div>
                        <div className="professor">
                            <div className="foto"></div>
                            <div className="descricao">
                                <p>Julia Maria</p>
                                <p>Professora de Yoga</p>
                                <div>
                                    <a href="#"><FaInstagram/></a>
                                    <a href="#"><FaFacebookSquare/></a>
                                    <a href="#"><FaTiktok/></a>
                                </div>
                            </div>
                        </div>
                </ContainerTeam>
            </Container>
        </Section>
    )
}