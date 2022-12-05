import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Proves en el hook useFetchGifs', () => {
    const title = 'Manga';
    test('should tornar l\'estat inicial', () => {
        const {result} = renderHook( () => useFetchGifs(title));
        const {gifs,isLoading} = result.current;

        expect(gifs.length).toBeFalsy();
        expect(isLoading).toBeTruthy();
    })

    test('should retornar imatges i isloading en false', async() => {
        const {result} = renderHook( () => useFetchGifs(title));

        await waitFor(
            () => expect(result.current.gifs.length).toBeGreaterThan(0)
        )

        const {gifs,isLoading} = result.current;

        expect(gifs.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    })
})