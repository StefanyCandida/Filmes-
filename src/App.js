import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Inicio from './pages/Sobre-Inicio';
import Filmes from './pages/Sobre-filmes';
import Series from './pages/Sobre-Series';
import Foto from './img/Tetflix.png'


const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
}
body{
 
   background-color:PaleVioletRed;
   
`;
const Navigation = styled.nav`
background-color:pink;
heigth:20vh;
display: flex;
justify-content: space-around;




`;
const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 20vh;
  background-color:pink;
  
`;

const Img = styled.img`
   width: 30%;  
  
`;


const ListItem = styled.li`
  list-style: none;
  cursor: pointer;
   width: 30%;
   font-size: 2.5rem ;
  
`;
const LinkS = styled(Link)`
color: white ;
text-decoration:none;
font-size: 91%;

&:hover{
  color: PaleVioletRed;
}

`


export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <GlobalStyle />
          <Navigation>
           
            <List>
            
              <ListItem>
                <LinkS to="/Inicio"><Img src={Foto} alt="Logo Tefflix" Title="Inicio"/> </LinkS>
              </ListItem>
              <ListItem>
                <LinkS to="/Filmes">Filmes</LinkS>
              </ListItem>
              <ListItem>
                <LinkS to="/Series">Series</LinkS>
              </ListItem>           
             </List>
          </Navigation>
            <Routes>
            <Route path="/Inicio" element={<Inicio />} />
            <Route path="/Filmes" element={<Filmes />} />
            <Route path="/Series" element={<Series />} />
            </Routes>
        </Router>

      
      </div>
    );
  }
}
