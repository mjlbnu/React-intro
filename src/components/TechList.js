import React, { Component } from 'react';

class TechList extends Component {
  state = {
    newTech: '',
    techs: ['NodeJS', 'ReactJS', 'React Native'],
  };

  // Formato de arrow function para ter acesso ao this
  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    /**
     * ...=> spread operator - copia o que já existe no array
     * segundo parâmetro adiciona o conteúdo de newTech
     */
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}
export default TechList;
