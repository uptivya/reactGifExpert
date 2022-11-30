import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getGifList = async() => {
        const gifsByQuery = await getGifs(category);
        setGifs(gifsByQuery);
        setIsLoading(false);
    }

    useEffect( () => {
        getGifList();
    }, [])

    return {
      gifs,
      isLoading
    }
}
