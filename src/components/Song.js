
import React from "react";
import PropType from "prop-types";
import {ColorContext} from "../Context/ColorContext";

const Song  = ({name, length, color}) =>{ 
    return <ColorContext.Consumer>
    { value => { 
       return <div style={{color: value.withColor? "purple": color }}>{name}<span><i> ({length}) </i></span></div> }
    }
    </ColorContext.Consumer>
}

Song.propTypes = {
    id: PropType.number,
    name: PropType.string,
    length: PropType.string,
    color: PropType.string
}

export default Song;