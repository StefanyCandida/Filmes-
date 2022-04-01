import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-family:Roboto, sans-serif;
 
`;
const CaixaFilmes = styled.figure`
display: flex;
flex-direction:row;

`;
const Title = styled.figcaption`
font-size: 1rem;
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


const Posteres = styled.img`
  border-radius: 5px;
  width: 35vh;
  height: 50vh;
  margin: 4vh;
  cursor: pointer;
 
`;

const apiFilmes = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/movie/popular?api_key=54e03ff5f44960d5ceb2552546493afd"
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
        <BoxInput>
          <Input
            onChange={this.buscar}
            type="text"
            placeholder="  Buscar Filmes"
          />
        </BoxInput>
        <Container>
          {this.state.filmesFiltrado.map((item) => (
            <CaixaFilmes>
               <Posteres src={item.poster_path} alt={item.title} />
               <Title>{item.title}</Title>             
            </CaixaFilmes>
          ))}
        </Container>
      </div>
    );
  }
}
