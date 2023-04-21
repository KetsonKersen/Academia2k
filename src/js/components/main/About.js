import React from "react";
import styled , { css } from "styled-components";


import medico from "../../../assets/Icons/medico.png"
import nutricional from "../../../assets/Icons/nutricional.png"
import treino from "../../../assets/Icons/treino.png"

import run from "../../../assets/overlays/run.png"

import Button from "../global/Button";
import Title from "../global/Title";

const ContentAbout = styled.div`
width: 100%;
height: 100%;
margin: 15rem 0;
position: relative;
margin-bottom: 20rem;
padding: 0 2rem;

/* IMAGEM */
.container-img{
    height: 60rem;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    padding: 0 2rem;
}
.container-img > img{
    height: 100%;
}
.container-img::before{
    content: '';
    width: 2rem;
    height: 94.2%;
    background-color: #ff1736;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(8rem);
    z-index: -1;
}
.container-img::after{
    content: '';
    width: 2rem;
    height: 94.2%;
    background-color: #ff1736;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(4rem);
    z-index: -1;
}
/* IMAGEM */

/* CONTENT */
.container-txt-sobre{
    display: flex;
    flex-direction: column;
    align-items:start;
    width: 60%;
}
.container-txt-sobre h3{
    font-size: 3rem;
    margin: 3rem 0;
}
.container-destaques{
    width: 65%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-left: -1rem;
}
.box-destaque{
    width: calc(100% / 3);
    padding: 0 2rem;
    margin: 5rem 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    border-right: 1px solid #ccc;
}
.box-destaque:last-of-type{
    border-right: none;
}
.box-destaque img{
    width: 6rem;
}
.box-destaque > h3{
    font-size: 1.8rem;
}
/* CONTENT */

@media ${`(max-width: 768px)`}{
    display: flex;
    flex-direction: column;
    align-items: center;

    .container-img{
        display: none;
    }
    .container-txt-sobre , .container-destaques{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .box-destaque{
        border-right: none;
    }
}
@media ${`(max-width: 1024px)`}{
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5rem 0;
    
    .container-txt-sobre{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .container-destaques{
        width: 100%;
    }
    .container-img{
        display: none;
    }
}
`;

export default function About(props){
    const Section = props.section
    const Container = props.container

    return(
        <Section id="about">
            <Container>
                <ContentAbout>
                    <div className="container-txt-sobre">
                        <Title txt="QUEM SOMOS"/>
                        <h3>Leve sua saúde e corpo para o próximo nivel.</h3>
                        <p>Leve seu corpo para o próximo nível com nosso programa abrangente projetado para ajudá-lo a alcançar seu objetivo de condicionamento físico.</p>
                    </div>
                    <div className="container-destaques">
                        <div className="box-destaque">
                            <img src={medico}/>
                            <h3>ACOMPANHAMENTO<br/>MÉDICO</h3>
                        </div>
                        <div className="box-destaque">
                            <img src={nutricional}/>
                            <h3>TREINOS<br/>PERSONALIZADOS</h3>
                        </div>
                        <div className="box-destaque">
                            <img src={treino}/>
                            <h3>ACOMPANHAMENTO<br/>NUTRICIONAL</h3>
                        </div>
                    </div>
                    <Button txt="Matricule-se"/>
                    <div className="container-img">
                        <img src={run}/>
                    </div>
                </ContentAbout>
            </Container>
        </Section>
    )
}