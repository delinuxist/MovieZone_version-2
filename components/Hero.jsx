/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import requests from "./Request";

const Hero = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + " ...";
    } else {
      return str;
    }
  };

  return (
    <div className=" w-full h-[500px] ">
      <div className=" w-full h-full">
        <div className=" absolute w-full h-[500px] bg-gradient-to-r from-black"></div>
        <img
          className=" h-full w-full"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          // height="350rem"
          alt={movie?.title}
          // width="1500vw"
        />
        <div className=" absolute w-full top-[20%] p-4 md:p-8">
          <h1 className=" text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-4">
            <button className="bg-gray-300 text-black border-gray-300 border py-2 px-5 rounded-sm ">
              Play
            </button>
            <button className=" bg-transparent border-gray-300 border py-2 px-5 ml-4 rounded-sm">
              Watch Later
            </button>
          </div>
          <p className=" text-gray-400 text-sm">
            Released: {movie?.release_date}
          </p>
          <p className=" w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]">
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
