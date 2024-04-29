const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
  params: {limit: '10'},
  headers: {
    'X-RapidAPI-Key': '109be5d26bmsh06c92aad9bf5699p1b73fbjsnf13f53cc563f',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const detchData =async(url,options)=>{
    const responce=await fetch(url,options);
    const data =  await responce.json();
    return data;
}





















