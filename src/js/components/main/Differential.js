import React from "react";
import styled from "styled-components";

import Button from "../global/Button"
import Title from "../global/Title"

import BgDifferential from "../../../assets/backgrounds/diferencial.jpg"
import OverlayDifferential from "../../../assets/overlays/overlay.png"

// IMPORT ICONS
import icon1 from "../../../assets/Icons/weightlifter.png"
import icon2 from "../../../assets/Icons/armario.png"
import icon3 from "../../../assets/Icons/dumbbell.png"
import icon4 from "../../../assets/Icons/water-bottle.png"
// IMPORT ICONS

const ContainerDifferential = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${BgDifferential});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right;
    margin-top: 20rem;
    padding:0  10rem;
    display: flex;
    justify-content: right;
    align-items: center;
    position: relative;

.overlay{
    width: 100%;
    height: 20rem;
    background-image: url(${OverlayDifferential});
    display: flex;
    align-items: center;
    gap: 2rem;
    padding-left: 40rem;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(0 , -50%);
}
.overlay h3{
    width: 50%;
    font-size: 3rem;
    color: white;
}
.overlay a{
    background-color:black;
}
.overlay a::before{
    border-color: black;
}
.content{
    margin-top: 20rem;
    width: 70rem;
    display: flex;
    align-items: end;
    flex-direction: column;
    color: white;
    text-align: right;
}
.content span{
    z-index: 1;
}
.content h3{
    font-size: 3rem;
    font-weight: 200;
    margin: 2rem 0;
}
.box {
    margin: 5rem 0;
}
.box p{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: right;
    align-items: center;
    gap : 2rem;
    margin: 2rem 0;
    position: relative;
    color: white;
    }
    .box p:after{
    content: '';
    width: 8rem;
    min-width: 8rem;
    height: 8rem;
    background-color: #222534;
    border-radius: 50%;
    display: inline-block;
    background-size: 60%;
    background-position: center;
    background-repeat: no-repeat;
}
.box p:nth-of-type(1)::after{
    background-image: url(${icon1});
}
.box p:nth-of-type(2)::after{
    background-image: url(${icon2});
}
.box p:nth-of-type(3)::after{
    background-image: url(${icon3});
}
.box p:nth-of-type(4)::after{
    background-image: url(${icon4});
}

@media ${`(max-width: 768px)`}{
    height: 100%;
    padding: 0 2rem;

    .overlay{
        width: 100%;
        top: -10rem;
        left: 0;
        transform: translate(0);
        padding-left: 2rem;
    }
    .overlay a{
        display: none;
    }
    .overlay h3{
        width: 100%;
    }
    .content{
        width: 100%;
        align-items: center;
        text-align: center;
    }
    .box{
        margin-top: 0rem;
    }
    .box p{
        display: flex;
        flex-direction: column;
        padding: 2rem 0;
    }
    .box p:after{
        width: 10rem;
        height: 10rem;
        order: -1;
        background-size: 70%;
        border-radius: 2rem;
        padding: .5rem;
        background-color: #ff0336;;
    }
}
@media ${`(max-width: 1024px)`}{
    .overlay{
        width: 100%;
        top: -10rem;
        left: 0;
        transform: translate(0);
        padding: 0 2rem;
        display: flex;
        justify-content: space-between;
    }
}
`;

export default function Differential(props){
    const Section = props.section


    return(
        <Section>
            <ContainerDifferential>
                <div className="overlay">
                    <h3>Estamos sempre oferecendo o melhor serviço de fitness para você.</h3>
                    <Button txt="Matricule-se"/>
                </div>
                <div className="content">
                    <Title txt="PORQUE ESCOLHER A 2K"/>
                    <h3>Podemos dar uma forma ao seu corpo aqui!</h3>
                    <p>Na 2k academia , nos dedicamos a ajudá-lo a alcançar o corpo dos seus sonhos. Nossos treinadores e nutricionistas especializados trabalharão com você para criar um plano personalizado de condicionamento físico e nutrição que o ajude a atingir seus objetivos específicos.</p>
                    <div className="box">
                        <p>Treinamento de condicionamento físico gratuito</p>
                        <p>Equipamentos para bolsas de ginástica</p>
                        <p>Equipamentos de ginástica modernos</p>
                        <p>Garrafa de Água Fresca</p>
                    </div>
                </div>
            </ContainerDifferential>
        </Section>
    )
}