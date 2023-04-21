import React , {useState} from "react";
import  NavList from "./navLis"
import Buttom from "../global/Button"

import Logo from "../../../assets/Icons/Logo.png"
import {AiOutlineClose} from "react-icons/ai"
import {GiHamburgerMenu} from "react-icons/gi"

import Menu from "./style";

export default function Header(){

    const [state,setState] = useState(false)
    const [condition,setCondition] = useState (false)

    const Open = ()=>{
        if(condition){
            document.querySelector("header ul").style.transform = "translate(0 , 60%)"
            setState(!state)
        }
    }
    const Close = ()=>{
        /* eslint-disable no-restricted-globals */
        if(condition){
            document.querySelector("header ul").style.transform = "translate(0 , -70%)"
            setState(!state)
        }
    }
    const ToggleMenu = ()=>{
        state ? Close() : Open();
        setCondition(true)
    }

    return(
        <Menu>
            <img src={Logo}/>
            <NavList close={Close}/>
            <Buttom id="btnMenu" txt="Contato"/>
            <button onClick={()=>ToggleMenu()} id="btn" className="open">{state ?<AiOutlineClose/> : <GiHamburgerMenu/>}</button>
        </Menu>
    )
}
