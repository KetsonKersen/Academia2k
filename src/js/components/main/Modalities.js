import React from "react";
import styled , {css} from "styled-components";

import Title from "../global/Title";

// IMPORT ICONS 
import treadmill from "../../../assets/Icons/treadmill.png"
import muscle2 from "../../../assets/Icons/muscle2.png"
import ioga from "../../../assets/Icons/ioga.png"
import weights from "../../../assets/Icons/weights.png"
import karateicon from "../../../assets/Icons/karate.png"
import boxing from "../../../assets/Icons/boxing-gloves.png"
// IMPORT ICONS 

// IMPORT FOTOS
import img1 from "../../../assets/photos/aerobico.jpg" 
import img2 from "../../../assets/photos/musculacao.jpg" 
import img3 from "../../../assets/photos/yoga.jpg" 
import img4 from "../../../assets/photos/crossfit.jpg" 
import img5 from "../../../assets/photos/karate.jpg" 
import img6 from "../../../assets/photos/box.jpg" 
// IMPORT FOTOS 

const ContainerTxt = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
    text-align: center;

    h3{
        font-size: 3rem;
        margin: 2rem 0;
    }
    @media ${`(max-width: 768px)`}{
        text-align: center;
        padding: 0 2%;
    }
    @media ${`(max-width: 1024px)`}{
        text-align: center;
    }
`;
const ContainerImgs = styled.div`
    display: grid;
    grid-template-rows: repeat(2,30rem);
    grid-template-columns: repeat(4,30rem);
    gap: 1rem;
    margin-bottom: 10rem;
    
    
    .modalidade{
        width: 100%;
        border-radius: 1rem;
        position: relative;
        overflow: hidden;
        transition: .5s;
    }
    .modalidade::after{
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        transition: .5s;
        background-size: cover;
        background-position: center;
        filter: grayscale(1);
        z-index: -1;
    }
    .modalidade:nth-child(1){
        grid-column-start: 1;
        grid-column-end: 3;
    }
    .modalidade:nth-child(6){
        grid-column-start: 3;
        grid-column-end: 5;
    }
    .modalidade:nth-child(1)::after{
        background-image: url(${img1});
    }
    .modalidade:nth-child(2)::after{
        background-image: url(${img2});
    }
    .modalidade:nth-child(3)::after{
        background-image: url(${img3});
    }
    .modalidade:nth-child(4)::after{
        background-image: url(${img4});
    }
    .modalidade:nth-child(5)::after{
        position: absolute;
        background-image: url(${img5});
    }
    .modalidade:nth-child(6)::after{
        background-image: url(${img6 });
    }
    .modalidade:hover:after{
        filter: grayscale(0);
        transform: scale(100%);
    }
    .modalidade:hover .container-icon{
        transform: translate(-10% , -10%) rotate(25deg);
        filter: invert(1);
    }
    .modalidade > span{
        font-size: 2rem;
        font-weight: 100;
        position: absolute;
        bottom: 2rem;
        left: 4rem;
        background-color: #FF1736;
        padding: .5rem 3rem;
        color: white;
    }
    .container-icon{
        width: 20rem;
        height: 10rem;
        border-radius: 0 5rem 5rem 0;
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        top: 2rem;
        left: -7rem;
        transform: rotate(25deg);
        transition: .5s;
    }
    .container-icon > img{
        width: 5rem;
        height: 5rem;
        transform: rotate(-25deg);
        position: absolute;
        bottom: 2rem;
        right: 2rem;
        filter: invert(100%);
    }
    @media ${`(max-width: 768px)`}{
        width: 100%;
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        padding: 0 2rem;
            
        .modalidade{
            width: 100%;
            height: 30rem;
        }
    }
    @media ${`(max-width: 1180px)`}{
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 2rem;

        .modalidade{
            width: 32rem;
            height: 30rem;
        }
    }
    @media ${`(max-width: 1231px)`}{
        grid-template-rows: repeat(2,28rem);
        grid-template-columns: repeat(4,28rem);
    }
`;


export default function Modalities(props){
    const Section = props.section
    const Container = props.container

    return(
        <Section id="modalities">
            <Container>
                <ContainerTxt>
                    <Title txt="MODALIDADES"/>
                    <h3>São mais de 5 modalidades, uma certa para você e suas necessidade.</h3>
                </ContainerTxt>
                <ContainerImgs>
                    <div className="modalidade">
                        <div className="container-icon">
                            <img src={treadmill}/>
                        </div>
                        <span>Aeróbico</span>
                    </div>
                    <div className="modalidade">
                        <div className="container-icon">
                            <img src={muscle2}/>
                        </div>
                        <span>Musculação </span>
                    </div>
                    <div className="modalidade">
                        <div className="container-icon">
                            <img src={ioga}/>
                        </div>
                        <span>Yoga</span>
                    </div>
                    <div className="modalidade">
                        <div className="container-icon">
                            <img src={weights}/>
                        </div>
                        <span>CrossFit</span>
                    </div>
                    <div className="modalidade">
                        <div className="container-icon">
                            <img src={karateicon}/>
                        </div>
                        <span>karatê </span>
                    </div>
                    <div className="modalidade">
                        <div className="container-icon">
                            <img src={boxing}/>
                        </div>
                        <span>Box</span>
                    </div>
                </ContainerImgs>
            </Container>
        </Section>
    )
}