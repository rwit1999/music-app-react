import React from "react";
import { playAudio } from "../tool";

const LibrarySong = ({isPlaying,audioRef,songs,setSongs,setCurrentSong,song,id,key}) => {

    const songSelectHandler = () =>{
        setCurrentSong(song);
        //add active 
        const newSongs = songs.map((song)=>{
            if(song.id===id){
                return{
                    ...song,
                    active:true,
                };
            }else{
              return{
                    ...song,
                    active:false,
                };
            }
        })
        setSongs(newSongs)
        //while clicking on another song ,checking  if a song is already playing
        playAudio(isPlaying,audioRef)
    }
    return(
        <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ""}`}>
            <img src={song.cover}></img>
            <div className="song-desc">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong