import { library } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({isPlaying,audioRef,songs,setSongs,setCurrentSong,libraryStatus})=>{
    return(
        <div className={`library ${libraryStatus ? 'library-on':''}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song)=>(
                    <LibrarySong 
                        isPlaying={isPlaying} 
                        audioRef={audioRef}
                        songs={songs} 
                        setSongs={setSongs}
                        setCurrentSong={setCurrentSong}
                        song={song}
                        id={song.id}
                        key={song.id}
                    />
                ))}
            </div>
        </div>
    )
}
export default Library