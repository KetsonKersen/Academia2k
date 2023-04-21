import React from "react";
import styled from "styled-components";
import Title from "../global/Title";

// IMPORT IMGS
import img1 from "../../../assets/photos/galeria1.jpg"
import img2 from "../../../assets/photos/galeria2.jpg"
import img3 from "../../../assets/photos/galeria3.jpg"
import img4 from "../../../assets/photos/galeria4.jpg"
import img5 from "../../../assets/photos/galeria5.jpg"
// IMPORT IMGS

const ContainerTxt = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h3{
        margin: 2rem 0;
        font-size: 3rem;
    }
    @media ${`(max-width: 768px)`}{
        text-align:center;
        padding: 0 2%;
    }
`;
    
const ContainerImg = styled.div`
    width: 100%;
    height: 55rem;
    display: grid;
    grid-template-columns: calc((50% 25% 25%) - 1rem);
    grid-template-rows: calc((33.3% 33.3% 33.3%) - 1rem);
    margin-bottom: 4rem;
    margin-top: 3rem;
    gap: 1rem;

    .imgGaleria{
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        cursor: pointer;
    }
    .imgGaleria:nth-of-type(1){
        grid-row-start: 1;
        grid-row-end: 2;
        grid-column-start: 1;
        grid-column-end: 2;
        background-image: url(${img1});
    }
    .imgGaleria:nth-of-type(2){
        grid-row-start: 1;
        grid-row-end: 3;
        grid-column-start: 2;
        grid-column-end: 4;
        background-image: url(${img2});
    }
    .imgGaleria:nth-of-type(3){
        grid-row-start: 3;
        grid-row-end: 4;
        grid-column-start: 2;
        grid-column-end: 3;
        background-image: url(${img3});
    }
    .imgGaleria:nth-of-type(4){
        grid-row-start: 2;
        grid-row-end: 4;
        background-image: url(${img4});
    }
    .imgGaleria:nth-of-type(5){
        grid-row-start: 3;
        grid-row-end: 4;
        grid-column-start: 3;
        grid-column-end: 4;
        background-image: url(${img5});
        position: relative;
        overflow: hidden;
        cursor: pointer;
    }
    .imgGaleria:nth-of-type(5)::after{
        content: 'Ver mais...';
        width: 100%;
        height: 100%;
        background: rgb(0,0,0);
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.7) 73%, rgba(255,255,255,0) 100%);
        position: absolute;
        bottom: 0;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2.4rem;
    }
    .imgGaleria:nth-of-type(5):hover::after{
        transform: scale(110%);
        background: rgb(0,0,0);
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 73%, rgba(255,255,255,0) 100%);
    }
    @media ${`(max-width: 768px)`}{
        padding: 0 2rem;
        .container-img-galeria{
            width: 100%;
            height: 20rem;
        }
        .imgGaleria:nth-of-type(5)::after{
            font-size: 1.6rem;
        }
    }
`;

export default function Gallery(props){
    const Section = props.section
    const Container = props.container

    return(
        <Section id="gallery">
            <Container>
                <ContainerTxt>
                    <Title txt="GALERIA"/>
                    <h3>Galeria do nosso local de trabalho</h3>
                    <p>Nossa Galeria do local de trabalho apresenta um escritório moderno, colaboração em equipe e cultura divertida.Atrai talentos e mostra o ambiente de trabalho da empresa.</p>
                </ContainerTxt>
                <ContainerImg>
                    <div className="imgGaleria"></div>
                    <div className="imgGaleria"></div>
                    <div className="imgGaleria"></div>
                    <div className="imgGaleria"></div>
                    <div className="imgGaleria"></div>
                </ContainerImg>
            </Container>
        </Section>
    )
}