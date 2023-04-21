import React , {useState} from "react";
import styled from "styled-components";

import Button from "../global/Button";

// IMPORT IMG
import ImcBG from"../../../assets/backgrounds/im2c.jpg"
// IMPORT IMG

const Section = styled.section`
    width: 100%;
    display: flex;
    justify-content:center;
    background-color: #222534;
    padding: 2rem;
    color: white;
    background-image: url(${ImcBG});
    background-size: 60%;
    background-repeat: no-repeat;
    background-position:  130% 20%;
    z-index: -1;
    padding-bottom: 3rem;

    @media ${`(max-width: 768px)`}{
        background-image: none;
    }
`;
const ContainerIMC = styled.section`
    flex-direction: column;
    align-items: start;

    .container-txt-imc{
        max-width: 50%;
    }
    .container-txt-imc h3{
        font-size: 3rem;
    }
    .container-txt-imc h3 span{
        color: #FF1034;
    }
    .container-txt-imc p{
        margin: 2rem 0;
    }
    .input-imc{
        display: flex;
        gap: 2rem;
    }
    .input-imc > div{
        display: flex;
        flex-direction: column;
        gap:  2rem;
    }
    .input-imc > div > input{
        width: 100%; 
        background-color: transparent;
        border: 1px solid white;
        padding: 1rem;
        color: white;
    }
    .input-imc label{
        display: flex;
        gap: 2rem;
    }
    .input-imc label > p{
        color: #FF1034;
    }
    .container > a{
        z-index: 0;
    }
    a{
        margin-top: 4rem;
        transform: translate(0)
    }

    @media ${`(max-width: 768px)`}{
        display: flex;
        align-items: center;

        .container-txt-imc{
            max-width: 100%;
        }
        .input-imc label{
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
    }
`;

export default function IMC(props){
    const Container = props.container

    const [imc,setImc] = useState('')
    const [classificacao,setClassificacao] = useState('')

    const calcular = ()=>{
        const valorPeso = Number(document.querySelector("#kg").value)
        const valorAltura = Number(document.querySelector("#altura").value)
        
        const res = valorPeso / (valorAltura*2)
        setImc(res.toFixed(2))

        if(valorPeso && valorAltura!= ""){
            if(res < 18.5){
                setClassificacao("Abaixo do peso normal")
            }if(res > 18.5){
                setClassificacao("Peso Normal")
            }if(res > 25.0){
                setClassificacao("Excesso de peso")
            }if(res > 30.0){
                setClassificacao("Obesidade classe 1")
            }if(res > 35.0){
                setClassificacao("Obesidade classe 2")
            }if(res > 40.0){
                setClassificacao("Obesidade classe 3")
            }
        }else{
            alert("Preencha todos os campos para realizar o calculo.")
            setImc('XX')
            setClassificacao('XX')
        }
    }

    return(
        <Section id="imc">
            <Container>
                <ContainerIMC>
                    <div className="container-txt-imc">
                        <h3>Vamos calcular o seu <span> IMC</span></h3>
                        <p>Determine facilmente seu índice de massa corporal com nossa ferramenta de cálculo precisa.</p>
                    </div>
                    <div className="input-imc">
                        <div>
                            <input id="kg" type="number" placeholder="Peso/KG"></input>
                            <label for="kg">Seu IMC é:<p id="imc">{imc}</p></label>
                        </div>
                        <div>
                            <input id="altura" type="number" placeholder="Altura/cm"></input>
                            <label for="kg">Seu peso é: <p id="peso">{classificacao}</p></label>
                        </div>
                    </div>
                    <Button function={calcular} txt="Calcular"/>
                </ContainerIMC>
            </Container>
        </Section>
    )
}
