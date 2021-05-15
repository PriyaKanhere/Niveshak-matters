import React, { useState, useContext, useEffect } from "react"
import ReactDom, { Router } from "react-router-dom"
import { Form } from "../components"
import { HeaderContainer } from "../containers/header"
import { FooterContainer } from "../containers/footer"
import * as ROUTES from '../constants/Routes';
import 'firebase/auth';
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
//import { Navbar } from "../components"
import styled from "styled-components";
import { Home } from "./home"

firebase.initializeApp({
    apiKey: "AIzaSyBuNJgJxlLxMHecwDYmDTev018gvHRUpdU",
    authDomain: "niveshak-f6661.firebaseapp.com"
})

export default function Signin() {
    const uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccessWithAuthResult: () => false,
        }
    }

    const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
    const [userName, setUserName] = useState('');

    const [profilePicture, setProfilePicture] = useState('')

    // Listen to the Firebase Auth state and set the local state.
    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
            setIsSignedIn(!!user);
            { setUserName(firebase.auth().currentUser.displayName) }
            { setProfilePicture(firebase.auth().currentUser.photoURL) }
        });
        return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    }, []);

    if (!isSignedIn) {
        return (
            <div>

                <HeaderContainer>

                    <Form>
                        <Form.Title>Please Sign In</Form.Title>

                        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                    </Form>
                </HeaderContainer>

                <FooterContainer />
            </div>
        );
    }

    return (
        <div>




            <Form.Text>


            </Form.Text>
            <HeaderContainer >

                <Navbar userName={userName} profilePicture={profilePicture} />

                <Form.TextSmall>
                    This page is protected by Google reCAPTCHA.
                    </Form.TextSmall>



            </HeaderContainer>
            <FooterContainer />
        </div>
    )
}


const Navbar = ({ userName, profilePicture }) => {


    const [isOpen, setIsOpen] = useState(false);
    return (
        <Nav>
            <Logo href="">
                <span>Welcome {userName}  </span>
                <img
                    alt="profile picture"
                    src={profilePicture}
                    width="8%"
                    max-width="30px"
                    height="auto"
                    border="3px solid black"
                    cursor="pointer"
                />

            </Logo>



            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <span />

                <span />
                <span />


            </Hamburger>
            <Menu isOpen={isOpen}>

                <MenuLink href="/home" onClick={() => `{<Home />}`}>Our Work</MenuLink>
                <MenuLink href="/aboutus" onClick={() => ROUTES.ABOUTUS}>About</MenuLink>
                <MenuLink href="/contact" onClick={() => ROUTES.CONTACT}>Contact</MenuLink>
                <MenuLink href="" onClick={() => firebase.auth().signOut()}> Sign out</MenuLink>

            </Menu>

        </Nav>
    );
};

export const Name = styled.p`
    color: #808080;
    text-overflow: ellipsis;
    font-size: 16px;
    
    &:hover {
        font-weight: bold;
        color: #e5e5e5;
    }
`;

export const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #67bc98;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  &:hover {
    color: #7b7fda;
  }
`;

export const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

export const Logo = styled.a`
  padding: 1rem 0;
  color: #7b7fda;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 800px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Picture = styled.img`
    height: 32px;
    width: 108px;
    margin-right: 40px;
    
    @media (min-width: 1449px) {
        height: 45px;
        width: 167px;
    }
`;