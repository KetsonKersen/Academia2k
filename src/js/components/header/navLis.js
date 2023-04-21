import React from "react";
import {Link} from "react-scroll";


export default function navList(props){


    return(
        <ul id="asd">
            <li><Link to="home" spy={true} smooth={true} offset={0} duration={500} onClick={()=>{props.close()}} >INICIO</Link></li>
            <li><Link to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={()=>{props.close()}} >SOBRE</Link></li>
            <li><Link to="modalities" spy={true} smooth={true} offset={-100} duration={500} onClick={()=>{props.close()}}>MODALIDADES</Link></li>
            <li><Link to="team" spy={true} smooth={true} offset={-79} duration={500} onClick={()=>{props.close()}}>PROFESSORES</Link></li>
            <li><Link to="gallery" spy={true} smooth={true} offset={-120} duration={500} onClick={()=>{props.close()}}>GALERIA</Link></li>
            <li><Link to="imc" spy={true} smooth={true} offset={-300} duration={500} onClick={()=>{props.close()}}>IMC</Link></li>
            <li><Link to="plans" spy={true} smooth={true} offset={-80} duration={500} onClick={()=>{props.close()}}>PLANOS</Link></li>
        </ul>
    )
}