import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-family:  Roboto, sans-serif;
  padding-top:10rem;
  height:50vh;
 
  `;
  const CaixaFilmes = styled.figure`
  display: flex;
  flex-direction:column;
  width: 20vw;

  text-align:center;
 
  
  `;
  const Title = styled.figcaption`
  font-size: 1.2rem;
  text-align:center;
  font-weight: 600;
  cursor: pointer;
  
  &:hover{
    color:magenta;
   
  }
  
  `;

const BoxInput = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 10vh;
`;
const Input = styled.input`
height: 5vh;
width: 20vw;
border-radius: 1000px;
text-align:center;
position: fixed;
left:75%;
top 7.5%
`;

const Posteres = styled.img`
  border-radius: 5px;
  width: 15vw;
  height: 50vh;
  margin: 4vh;
  cursor: pointer;
 
`;
const P = styled.p`
font-size: 0.8rem;
width: 20vw;
text-align:center;
padding:10px;

`;

const apiFilmes = axios.create({
  baseURL: "https://api.themoviedb.org/3/tv/popular?api_key=d2109f7fce9f4072f80df861fc4fdc66&language=pt-BR&page=1"
});

export default class Series extends React.Component {
  state = {
    listSeries: [],
    buscadas: []
  };

  componentDidMount() {
    this.getSeries();
  }
  getSeries = async () => {
    const response = await apiFilmes.get();

    const series = response.data.results.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
      };
    });

    this.setState({
      listSeries: series,
      buscadas: series
    });
  };
 
  buscar = (e) => {
    const { listSeries } = this.state;
    const SeriesBuscar = listSeries.filter((item) => {
      if (item.name.toLowerCase().includes(e.target.value.toLowerCase())) {
        return true;
      }
    });
    this.setState({
      buscadas: SeriesBuscar
    });
  };



  render() {
    return (
      <div>
        <BoxInput>
          <Input
            onChange={this.buscar}
            type="text"
            placeholder="Buscar Series"
          />
        </BoxInput>
        <Container>
          {this.state.buscadas.map((item) => (
         <CaixaFilmes>
               <Posteres src={item.poster_path} alt={item.name} />
               <Title>{item.name}</Title> 
               <P>{item.overview}</P>                             
            </CaixaFilmes>
          ))}
        </Container>
      </div>
    );
  }
}

