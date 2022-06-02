//fetching a gif based on specific keyword
import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_GIPHY_API;

//our custom hook
const useFetch = ({ keyword }) => {
  const [gifUrl, setGifUrl] = useState("");

  const fetchGifs = async () => {
    try {
      //we put the GIF url for search endpoint and attach our custom API to it. (&q=) and word to search. someone types few words we use keyword.split to remove spaces and then .join() to attach it together to make one word for the search query. limit=1 is to find only one GIF
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword.split(" ").join("")}&limit=1`);
      const { data } = await response.json();

      setGifUrl(data[0]?.images?.downsized_medium.url);
    } catch (error) {
      //if a gif isn't found we use this demo gif instead
      setGifUrl("https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284");
    }
  };

  //useEffect takes place everytime keyword changes
  useEffect(() => {
    if (keyword) fetchGifs();
  }, [keyword]);

  return gifUrl;
};

export default useFetch;