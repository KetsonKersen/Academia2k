import styled from "styled-components";
const Menu = styled.header`
    width: 100%;
    height: 8rem;
    position: fixed;
    top: 0;
    left: 0%;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between ;
    padding: 0 2rem;
    z-index: 999;
    ul{
        display: flex;
        gap: 2rem;
        transform: translate(0 , 0);
    }
    ul li {
        cursor: pointer;
    }
    img{
        height: 6rem;
    }
    #btn{
        display:none
    }
    .open{
        background-color: transparent;
        padding: 0 .5rem;
        border: none;
        color: white;
        font-size: 3rem;
        display: flex;
        align-items: center;
        position: absolute;
        top: 2rem;
        right: 2rem;
    }
    @media ${`(max-width: 1180px)`}{
        #btnMenu{
            display:none
        }
    }
    @media ${`(max-width: 860px)`}{
        justify-content: center;
        img{
            display:none
        }
    }
    @media ${`(max-width: 860px)`}{
        justify-content: center;
        img{
            display:none
        }
    }
    @media ${`(max-width: 768px)`}{
        
        display: flex;
        justify-content: center;
        flex-direction: row;
        #btn{
            display: block;
        }
        ul{ 
            width: 90%;
            flex-direction: column;
            gap: 0rem;
            background-color: black;
            padding: 0rem 5rem;
            border: 1px solid #9b9b9b;
            border-radius: 2rem;
            transition: .2s;
            position: absolute;
            transform: translate(0% , -70%);
        }
        ul li{
            width: 100%;
            display: flex;
            align-items: center;
            padding: 1.5rem 0;
            justify-content: center;
            border-bottom: 1px solid #ccc;
        }
        ul li:last-child{
            border:none;
        }
        img{
            display: block;
        }

    }
`;
export default Menu