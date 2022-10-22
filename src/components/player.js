import React ,{useEffect} from "react";
import { FontAwesomeIcon } from  '@fortawesome/react-fontawesome'
import { faPlay,faAngleLeft,faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons'
import { playAudio } from "../tool";

const Player = ({songs,audioRef,songInfo,setSongInfo,setCurrentSong,currentSong,isPlaying,setIsPlaying,setSongs}) => {

    useEffect(()=>{
        const newSongs = songs.map((song)=>{
            if(song.id===currentSong.id){
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
    },[currentSong]) //runs this function every time currentSong gets updated
    
    //event handlers
    const playSongHandler = ()=>{
        // console.log(audioRef); 
        // console.log(audioRef.current);
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(!isPlaying)
        }
        else{
            audioRef.current.play()
            setIsPlaying(!isPlaying)
        }
    };
    
    const formatTime = (time)=>{
        return(   //from stack formula
            Math.floor(time/60) + ":" + ("0" + Math.floor(time%60)).slice(-2)
        )
    };
    const dragHandler =(e)=>{
        audioRef.current.currentTime = e.target.value
        setSongInfo({...songInfo,currentTime:e.target.value})
    }

    const skipHandler = (direction)=>{
        let idx = songs.findIndex((song)=>song.id===currentSong.id)
        const n=songs.length
        if(direction==='skip-back'){
            if(idx==0)idx=n
            setCurrentSong(songs[(idx-1)%n])
        }
        else{
            setCurrentSong(songs[(idx+1)%n])
        }
        playAudio(isPlaying,audioRef)
    }
    
    return(
        <div className="player">
            <div className="time-control">
                <p>{formatTime(songInfo.currentTime)}</p> 
                <input 
                    min={0} 
                    max={songInfo.duration||0} 
                    value={songInfo.currentTime} 
                    onChange={dragHandler}
                    type="range" 
                />
                <p>{formatTime(songInfo.duration)}</p> 
            </div>
            <div className="play-control">
                <FontAwesomeIcon  onClick={()=>skipHandler('skip-back')} className="skip-back" size="2x" icon={faAngleLeft}/>
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={isPlaying? faPause:faPlay}/>
                <FontAwesomeIcon  onClick={()=>skipHandler('skip-forward')} className="skip-forward" size="2x" icon={faAngleRight}/>
            </div>
        </div>
    )
}

export default Player