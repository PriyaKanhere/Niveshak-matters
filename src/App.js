import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import React, { useState, useEffect } from "react"
import Signin from "./pages/signin"
import styled from "styled-components";



function App() {


  return (
    <div>
      <Container>
        <Signin />
      </Container>
    </div>

  );

}

const Container = styled.div`

  
`;

export default App;