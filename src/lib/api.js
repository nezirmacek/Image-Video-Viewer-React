import axios from 'axios';

export function getAPOD(date = ' '){
    return axios.get(`https://api.nasa.gov/planetary/apod?api_key=LzPohEOQFuHUetf6yL0Bb9cZdkAeQsxyDOVTBxHb&date=${date}`);
}