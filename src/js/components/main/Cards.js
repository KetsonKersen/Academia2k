import React from "react";
import styled from "styled-components";

import Progress from "../../../assets/Icons/work-in-progress.png"
import muscle from "../../../assets/Icons/muscle.png"
import nutri from "../../../assets/Icons/to-do-list.png"

const Card = styled.div`
    width: 35rem;
    background-color: white;
    text-align: center;
    padding: 5rem;
    border-radius: 2rem;
    border-top-left-radius: 7rem;
    border-top-right-radius: 0rem;
    transform: translate(0 , -15%);
    box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.3);

img{
    width: 8rem;
    height: 8rem;
}
h3{
    margin: 2rem 0;
    font-size: 3rem;
}
@media ${`(max-width: 1024px)`}{
    width: 31rem;
}
`;
export default function Cards(props){
    const Container = props.container
    const Section = props.section

    return(
        <Section>
            <Container>
                <Card>
                    <img src={Progress}></img>
                    <h3>Progressão</h3>
                    <p>Nossa equipe de especialistas trabalhará com voce para criar um plan o personalizado que o ajudará a alcançar o sucesso passo a passo.</p>
                </Card>
                <Card>
                <img src={muscle}></img>
                    <h3>Resultado</h3>
                    <p>Nossa equipe de especialistas trabalhará com você para criar um plano personalizado que o ajudará a alcançar o sucesso passo a passo.</p>
                </Card>
                <Card className="card">
                <img src={nutri}></img>
                    <h3>Nutriçao</h3>
                    <p>Nossa equipe de especialistas trabalhará com voce para criar um plan o personalizado que o ajudará a alcançar o sucesso passo a passo.</p>
                </Card>
            </Container>
        </Section>
    )
}