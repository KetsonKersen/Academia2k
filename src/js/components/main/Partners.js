import React from "react";
import styled from "styled-components";

// IMPORT IMG
import patrocinio1 from "../../../assets/overlays/1.png"
import patrocinio2 from "../../../assets/overlays/2.png"
import patrocinio3 from "../../../assets/overlays/3.png"
import patrocinio4 from "../../../assets/overlays/4.png"
import patrocinio5 from "../../../assets/overlays/5.png"
// IMPORT IMG

const ConteinerPartners = styled.div`
    width: 100%;
    margin-top: 15rem;
    margin-bottom: 10rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0 2rem;
    
    img{
        transition: linear .2s;
    }
    img:hover{
        filter: brightness(20%);
    }
    @media ${`(max-width: 768px)`}{
        justify-content: center;

        img{
            transition: linear .2s;
        }
    }

`;

export default function Partners(props){
    const Section = props.section
    const Container = props.section

    return(
        <Section>
            <Container>
                <ConteinerPartners>
                    <img src={patrocinio1}/>
                    <img src={patrocinio2}/>
                    <img src={patrocinio3}/>
                    <img src={patrocinio4}/>
                    <img src={patrocinio5}/>
                </ConteinerPartners>
            </Container>
        </Section>
    )
}