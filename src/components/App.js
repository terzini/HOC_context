import React from 'react';
import SongList from "./SongList";
import {ColorContext} from "../Context/ColorContext";
import ToggleButton from './ToggleButton';
import ButtonContainer from "../containres/ContextConsumerWrapper"

class App  extends React.Component{
  constructor(props){
    super(props);
    this.songs = props.songs;
    this.state = { withColor: false, action: this.toggleColor }
  }

  toggleColor= () => {
    this.setState( { withColor: !this.state.withColor} );
  }
  
  render(){
    const ButtonWrapper = new ButtonContainer(ToggleButton, ColorContext)
  return (
  <ColorContext.Provider value={this.state}>
    <SongList songs={this.songs}></SongList>
    <ButtonWrapper/>
  </ColorContext.Provider>)
  }
}

export default App;
