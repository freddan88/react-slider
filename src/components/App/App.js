import React, { Component } from 'react';
import Frame from '../Frame/Frame';
import Art from '../Art/Art'
import './App.css';
class App extends Component {

  state = {
    items: [],
    isLoaded: false,
    index: 0,
  }

  componentDidMount() {
    this.fetchImages();
  }

fetchImages = () => {

  // const api = `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_API_KEY}&page=1&per_page=5&query=nature`;
  const api = `https://api.unsplash.com/search/photos?client_id=1788c0b47507ffdc8ae39c16202592c941740bd2e9d05032156695ef25f78d60&page=1&per_page=5&query=nature`;

  fetch(api)
  .then(res => res.json())
  .then(json => {
    this.setState({
      isLoaded: true,
      items: json.results,
    });
  });
}

handleClickNext = () => {
  if (this.state.index === 4) {
    this.setState({ index: 0 });
  }
  else {
    this.setState({ index: this.state.index + 1 })
  }
}

handleClickPrev = () => {
  if (this.state.index === 0) {
    this.setState({ index: 4 });
  }
  else {
    this.setState({ index: this.state.index - 1 })
  }
}

  render() {
    const { isLoaded, items, index} = this.state;
    
    if(!isLoaded){
      return <h1 className="App">Loading...</h1>
    }
    else{
      return (
        <div className="App">
          <button className="prev" onClick={this.handleClickPrev}>Prev</button>
          <Frame>
              <Art items={items[index]} />
          </Frame>
          <div className="credit-user">
            <p>Photo By: {items[index].user.first_name}</p>
            <a href={items[index].user.links.html} target="_blank" rel="noopener noreferrer">Unspash</a>
            <a href={"https://www.instagram.com/" + items[index].user.instagram_username} target="_blank" rel="noopener noreferrer">Instagram</a>
            <img src={items[index].user.profile_image.small} alt={items[index].user.bio} />
          </div>
          <button className="next" onClick={this.handleClickNext}>Next</button>
        </div>
      );
    }
  }
}
export default App;