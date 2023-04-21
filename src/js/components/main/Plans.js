import React from "react";
import styled from "styled-components";

import Button from "../global/Button";

import bgPlans from "../../../assets/overlays/nodays.png"
import gold from "../../../assets/photos/gold.jpg"
import premium from "../../../assets/photos/premium.jpg"
import dimond from "../../../assets/photos/dimond.jpg"

const Section = styled.section`
    display: flex;
    justify-content:center;
    padding: 10rem 0;
    background-image: url(${bgPlans});
    background-position: center;
`;
const ContainerPlans = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;

    .plano{
        width: 30rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 2rem;
        overflow: hidden;
        box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.3);
    }
    .head-plano{
        width: 100%;
        height: 15rem;
        display: flex;
        justify-content: center;
        align-items: end;
        background-size: cover;
        background-position: center;
    }
    .plano:nth-of-type(1) .head-plano{
        background-image: url(${gold});
    }
    .plano:nth-of-type(2) .head-plano{
        background-image: url(${premium});
    }
    .plano:nth-of-type(3) .head-plano{
        background-image: url(${dimond});
    }
    .head-plano p{
        width: 100%;
        text-align: center;
        background-color: #FF1034;
        color: white;
        font-size: 2rem;
        padding: .5rem;
    }
    .body-plano{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem 0;
        text-align: center;
        border: 1px solid #ccc;
        padding-bottom: 3rem;
        background-color: white;
    }
    .body-plano ul{
        min-height: 15rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #313030;
        gap: 1rem;
    }
    .body-plano h3{
        margin: 2rem 0;
        font-size: 3rem;
        position: relative;
    }
    .body-plano h3::before{
        content: "R$";
        font-size: 1.6rem;
        position: absolute;
        top: .5rem;
        left: -2.5rem;
    }
    .body-plano h3::after{
        content: "/mês";
        font-size: 1.6rem;
    }
    .body-plano a::before{
        z-index: 1;
    }
`;

export default function Plans(props){
    const Container = props.container

    return(
        <Section id="plans">
            <Container>
                <ContainerPlans>
                    <div className="plano">
                        <div className="head-plano">
                            <p>Plano Gold</p>
                        </div>
                        <div className="body-plano">
                            <ul>
                                <li>Horario livre</li>
                                <li>Treino personalizado</li>
                            </ul>
                            <h3>120</h3>
                            <Button txt="Matricule-se"/>
                        </div>
                    </div>
                    <div className="plano">
                        <div className="head-plano">
                            <p>Plano Premium</p>
                        </div>
                        <div className="body-plano">
                            <ul>
                                <li>Horario livre</li>
                                <li>Treino personalizado</li>
                                <li>Acompanhamento nutricional</li>
                                <li>Acesso a piscina</li>
                            </ul>
                            <h3>150</h3>
                            <Button txt="Matricule-se"/>
                        </div>
                    </div>
                    <div className="plano">
                        <div className="head-plano">
                            <p>Plano Dimond</p>
                        </div>
                        <div className="body-plano">
                            <ul>
                            <li>Horario livre</li>
                                <li>Treino personalizado</li>
                                <li>Acompanhamento nutricional</li>
                                <li>Acesso a piscina</li>
                                <li>Incluso aulas marciais</li>
                            </ul>
                            <h3>180</h3>
                            <Button txt="Matricule-se"/>
                        </div>
                    </div>
                </ContainerPlans>
            </Container>
        </Section>
    )
}