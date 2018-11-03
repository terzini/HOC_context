import PropTypes from "prop-types";
import React from 'react';
import Song from "./Song";

const SongList = ({songs}) => {   

        const  allSongs = songs.map(s => { 
            return <Song key={"all-" + s.id} {...s}/>}
        );
        const favourites = songs.filter(s => s.color === "red").map(s => 
            <Song key={"f-"+ s.id} {...s}></Song>
        );

        return (
            <>
                <fieldset>
                    <legend>Favourites</legend>
                    <div>{favourites}</div>
                </fieldset>
                <fieldset>
                    <legend>All</legend>
                    <div>{allSongs}</div>
                </fieldset>
            </>
        );
}

SongList.proTypes = {
    songs: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        length: PropTypes.string,
        color: PropTypes.string
    }))
}

export default SongList;