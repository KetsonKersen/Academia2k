import React from "react";
import styled from "styled-components";

import {FaFacebookSquare , FaTiktok , FaInstagram} from "react-icons/fa"

const ContainerFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #222534;
    color: white;
    padding: 2rem 0;
`;
const Container = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: start;

    div{
        width: 49%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    div:last-of-type .inf{ 
        text-align: right;
        display: flex;
        flex-direction: column;
        align-items: end;
        border-left: none;
        border-right: .5rem solid #FF0336;
    }
    .inf{
        width: 100%;
        min-height: 13rem;
        padding: 0 2rem;
        border-left: .5rem solid #FF0336;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0;
    }
    .inf span{
        font-size: 2rem;
        font-weight: 600;
    }
    .inf p{
        color: #CCC;
    }
    .inf p:first-of-type{
        margin-top: 1rem;
    }
    .inf div{
        display: flex;
        flex-direction:row;
        align-items: center;
        justify-content: end;
        margin-top: 2rem;
    }
    .inf div a{
        color: white;
        font-size: 2.4rem;
    }
    .inf div a:hover{
        color: #FF0336;
    }
    @media ${`(max-width: 768px)`}{
        flex-direction: column;

        div{
            width: 100%;
            margin-bottom: 2rem;
            align-items: start;
        }
        div:last-of-type .inf{ 
            display: flex;
            text-align: left;
            flex-direction: column;
            align-items: start;
            border-left: .5rem solid #FF0336;
            border-right: none;
        }
        div:last-of-type .inf div{
            justify-content:left;
        }
        
    }
`;


export default function Footer(){
    return(
        <ContainerFooter>
            <Container>
                <div>
                    <div className="inf">
                        <span>Informações</span>
                        <p>(31) 9 1234 5678</p>
                        <p>academia2k@gmail.com</p>
                    </div>
                    <div className="inf">
                        <span>Horario de funcionamento</span>
                        <p>Segunda - Sexta : 06:00 ás 23:00</p>
                        <p>Sábado : 06:00 ás 21:00</p>
                        <p>Domingo : Fechado</p>
                    </div>
                </div>
                <div>
                    <div className="inf">
                        <span>Localização</span>
                        <p>Av. Severino Ballesteros, 850 - Cabral, Contagem - MG, 32110-005 </p>
                    </div>
                    <div className="inf">
                        <span>Rede Sociais</span>
                        <div>
                            <a href="#"><FaInstagram/></a>
                            <a href="#"><FaFacebookSquare/></a>
                            <a href="#"><FaTiktok/></a>
                        </div>
                    </div>  
                </div>
            </Container>
            <p>Política de Privacidade | © 2023 Ketson Kersen</p>
        </ContainerFooter>
    )
}