import React, { useEffect, useState } from 'react'
import './row.css'
import axios from '../../../Utils/axios'

import movieTrailer from 'movie-trailer'
import YouTube from 'react-youtube'

function Row({title,fetchUrl,isLargeRow}) {

    const [movies, setMovies]=useState([]);
    const[trailerUrl,setTrailerUrl]=useState('')

    const BASE_URL = 'https://image.tmdb.org/t/p/original'


    useEffect(()=>{

        (async ()=>{
            
            try{   
            const request = await axios.get(fetchUrl)
                    setMovies(request.data.results)
            }
            catch (error) {
                console.log("error", error)
            }
        })()

    },[fetchUrl])

    const handleClick = (movie)=>{
            if(trailerUrl){
                setTrailerUrl('')
            }
            else{
                movieTrailer(movie?.title || movie?.name || movie?.original_name).then((url)=>{
                    const urlParams = new URLSearchParams(new URL(url).search)
                    // console.log(urlParams)
                    // console.log(urlParams.get('v'))
                    setTrailerUrl(urlParams.get('v'))
                }).catch((error) => console.log(error));
            }
    }

    const opts ={
        height:'390',
        width:'100%',
        playerVars:{
            autoplay:1
        }
    }


  return (
    <div className="row">
         <h2 className='title'>{title}</h2>
         <div className="row__posters">
              {movies?.map((movie,index)=>(
                <>

                <img className={`row__poster ${isLargeRow && 'row__posterLarge'}`} onClick={()=>{handleClick(movie)}} 
                key={index} src={`${BASE_URL}${isLargeRow?movie.poster_path:movie.backdrop_path}`} alt={movie.name} />

                </>
              ))}
         </div>
         <div style={{padding:'20px'}}>{trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}</div>
    </div>
  )
}

export default Row