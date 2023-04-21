import React from "react";
import styled from "styled-components";
import Button from "../global/Button";
import BgHome from "../../../assets/backgrounds/home.png"
import Title from "../global/Title";

import {FaFacebookSquare , FaTiktok , FaInstagram} from "react-icons/fa"

const Section = styled.section`
    width: 100%;
    height: 110vh;
    background-color:#000;
    background-image: url(${BgHome});
    background-size: 124rem;
    background-repeat: no-repeat;
    background-position: 0 50%;

    .containerTxt{
        position: absolute;
        top: 50%;
        right: 30rem;
        transform: translate(0 , -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
    }
    .containerTxt span{
        margin-bottom: 2rem;
    }
    .containerTxt h1{
        font-size: 4.5rem;
    }
    .containerTxt h2{
        font-size: 3.5rem;
        font-weight: 400;
    }
    .containerTxt a{
        margin-top: 2rem;
    }
    .containerSociais{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        font-size: 2rem;
        font-weight: 100;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate(30% , -50%) rotate(-90deg);
        color: white;
    }
    .containerSociais span{
        width: 7rem;
        height: .5rem;
        background-color: #ff0336;
    }
    .containerSociais div{
        display: flex;
        gap: 2rem;
    }
    .containerSociais div a{
        width: 2rem;
        height: 2rem;
        font-size: 2rem;
        color: white;
        transform: rotate(90deg);
        transition: linear .1s;
    }
    .containerSociais div a:hover{
        color: #ff0366;
        transform: scale(150%) rotate(90deg);
    }
    @media ${`(max-width: 1600px)`}{
        background-size: 70%;
        background-position: 0 50%;
        .containerTxt{
            right: 7rem;
        }
        .containerSociais{
            transform: translate(40% , -50%) rotate(-90deg);
            font-size: 1.6rem;
        }
        
    }
    @media ${`(max-width: 1024px)`}{
        background-size: 70%;
        background-position: 0 50%;
        
        .containerTxt{
            right: 10rem;
        }
        .containerSociais{
            transform: translate(40% , -50%) rotate(-90deg);
            font-size: 1.6rem;
        }
    }

    @media ${`(max-width: 1024px)`}{
        background-size: 100%;
        background-position: 100% 20%;
        align-items: left;
        flex-direction: column;


        .containerTxt{
            width: 100%;
            right: 50%;
            bottom: 20%;
            transform: translate(50% , 50%);
            padding: 0 2rem;
        }
        .containerTxt span{
            margin-bottom: 2rem;
        }
        .containerTxt h1{
            font-size: 3rem;
        }
        .containerTxt h2{
            font-size: 2rem;
            font-weight: 400;
        }
        .containerSociais{
            display: none;
        }

    }
`;

export default function Home(){
    return(
        <Section id="home">
            <div className="containerTxt">
                <Title theme="light" txt="ENCONTRE SUA ENERGIA"/>
                <h1>DEIXE SEU CORPO</h1>
                <h2>EM FORMA E PERFEITO</h2>
                <Button theme="light" txt="Matricule-se"/>
            </div>
            <div className="containerSociais">
                <div>
                    <a href="#"><FaInstagram/></a>
                    <a href="#"><FaFacebookSquare/></a>
                    <a href="#"><FaTiktok/></a>
                </div>
                <span></span>
                <p>REDE SOCIAIS</p>
            </div>
        </Section>
    )
}