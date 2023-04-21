import React from "react";
import styled , {css} from "styled-components";
import Home from "./Home";
import Cards from "./Cards";
import About from "./About";
import Modalities from "./Modalities";
import Differential from "./Differential";
import Team from "./Team";
import Partners from "./Partners";
import Gallery from "./Gallery";
import IMC from "./IMC";
import Plans from "./Plans";

const Section = styled.section`
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Container = styled.div`
    width: 124rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    @media ${`(max-width: 768px)`}{
        width: 100%;
        justify-content: center;
        align-items: end;
        gap: 2rem;
    }
    @media ${`(max-width: 1024px)`}{
        width: 100%;
        justify-content: center;
        align-items: center;
        padding: 0 2rem;
        gap: 2rem;
    }
`;
const ContainerCollumn = styled.div`
    width: 124rem;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
`;

export default function Main(){
    return(
        <main>
            <Home/>
            <Cards section={Section} container={Container}/>
            <About section={Section} container={Container}/>
            <Modalities section={Section} container={ContainerCollumn}/>
            <Differential section={Section}/>
            <Team section={Section} container={ContainerCollumn}/>
            <Partners section={Section} container={Container} />
            <Gallery section={Section} container={ContainerCollumn} />
            <IMC container={Container}/>
            <Plans container={ContainerCollumn}/>
        </main>
    )
}
window.addEventListener("load",Main)