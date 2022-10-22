import React,{useState,useRef} from "react";
import Song from "./components/song"
import Player from "./components/player"
import Library from "./components/Library";
import Nav from "./components/Nav"

import data from './util'

import './styles/app.scss'

function App() {
  //Ref
  const audioRef = useRef(null)

  //states
  const [songs,setSongs] = useState(data())
  const [currentSong,setCurrentSong] = useState(songs[0])
  const [isPlaying,setIsPlaying] = useState(false)
  const [songInfo,setSongInfo] = useState({ //for song time
    currentTime:0, //initially
    duration:0
})
const [libraryStatus,setLibraryStatus]=useState(false)
  const songTimeHandler = (e)=>{
    const curr = e.target.currentTime
    const duration = e.target.duration
    setSongInfo({...songInfo,currentTime:curr,duration:duration})
};


  return (
    <div className={`App ${libraryStatus ? 'library-active':''}`}>
      <Nav libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
      />
      <Song currentSong={currentSong}/>
      <Player
        songs={songs}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        setCurrentSong={setCurrentSong}
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setSongs={setSongs}
      />
      <Library 
        isPlaying={isPlaying}
        audioRef={audioRef}
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        libraryStatus={libraryStatus}
      />
      <audio  
          onTimeUpdate={songTimeHandler} 
          onLoadedMetadata={songTimeHandler}//update the end time initially
          ref={audioRef} 
          src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
