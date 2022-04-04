import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Foto from '../img/Tetflix.png'

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction:column;
  align-items:center;
  font-family:Roboto, sans-serif;
  padding-top:10rem;
 

 
  `;
const Img = styled.img`
   width: 30%;  
`;

const apiFilmes = axios.create({
  baseURL: "https://api.themoviedb.org/3/tv/popular?api_key=d2109f7fce9f4072f80df861fc4fdc66&language=en-US&page=1"
});

export default class App extends React.Component {
  state = {
    listFilmes: [],
    filmesFiltrado: []
  };

  componentDidMount() {
    this.getMovies();
  }
  getMovies = async () => {
    const response = await apiFilmes.get();
    //console.log(response.data.results)

    const filmes = response.data.results.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
      };
    });

    this.setState({
      listFilmes: filmes,
      filmesFiltrado: filmes
    });
  };

  buscar = (event) => {
    const { listFilmes } = this.state;
    const BuscarFilmes = listFilmes.filter((item) => {
      if (item.title.toLowerCase().includes(event.target.value.toLowerCase())) {
        return true;
      }
    });
    this.setState({
      filmesFiltrado: BuscarFilmes
    });
  };

  render() {
    return (
      <div>
        
        <Container>
          <h1>Bem vindes ao Tefflix</h1>
         <Img src={Foto} alt="Logo Tefflix"/> 
         

        </Container>
      </div>
    );
  }
}
