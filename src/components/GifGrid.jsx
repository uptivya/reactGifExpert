import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifList } from './GifList'

export const GifGrid = ({category}) => {

    const {gifs, isLoading} = useFetchGifs(category);

    return (
        <div>
            <h3 key={category}>{category}</h3>
            {
                isLoading 
                ? ( <span><b>Loading...</b></span> )
                : null
            }
            {
                isLoading && ( <span><b>Loading...</b></span> )
            }
            <div className='flex-grid__container'>
                {
                    gifs.map(gif => (
                        <GifList key={gif.id} {...gif} />
                    ))
                }
            </div>
        </div>
    )
}
