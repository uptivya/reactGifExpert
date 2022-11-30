export const getGifs = async(newCategory) => {
    const apiKey = 'uY2nQqf8XnQxzRV59adu23pBIqG2Oj0y';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ apiKey }&q=${ newCategory }&limit=10&offset=0&rating=r&lang=es`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    
    const gifs = data.map ( ({id, title, images}) => ({
        id: id,
        title: title,
        url: images.downsized_medium.url
    }))

    return gifs;
}