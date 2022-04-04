import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-family:  Roboto, sans-serif;
 
`;

const BoxInput = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 10vh;
`;
const Input = styled.input`
height: 5vh;
width: 40vh;
border-radius: 1000px;
text-align:center;
position: fixed;
left:80%;
top 13%
`;



const apiFilmes = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/tv/{tv_id}?api_key=d2109f7fce9f4072f80df861fc4fdc66&language=pt-br"
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
    // console.log(response.data.results)

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

  buscar = (e) => {
    const { listFilmes } = this.state;
    const BuscarFilmes = listFilmes.filter((item) => {
      if (item.title.toLowerCase().includes(e.target.value.toLowerCase())) {
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
        <BoxInput>
          <Input
            onChange={this.buscar}
            type="text"
            placeholder="  Buscar Filmes/Series"
          />
        </BoxInput>
        <Container>
         <h1>Bem Vindo ao Tefflix</h1>
        </Container>
      </div>
    );
  }
}
