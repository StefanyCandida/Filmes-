import React from 'react';
import Series from '../pages/Sobre-Inicio';
import Styled from 'styled-components'

const Div = Styled.div`
display: flex;
background-color:red;

}
`

export default class Series extends React.Component {
  render() {
    return (
      <Div>
        <Inicio />
      </Div>
    );
  }
}
