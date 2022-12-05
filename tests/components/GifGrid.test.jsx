import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs');

describe('Proves a <GifGrid />', () => {
    const category = 'Manga'
    test('Ha de mostrar el loading inicialment', () => {
        useFetchGifs.mockReturnValue({
            gifs: [],
            isLoading: true
        })

        const loadingText = 'Loading...'
        render(<GifGrid key={category} category={category}/>)
        expect(screen.getByText(loadingText)).toBeTruthy();
    })

    test('Ha de mostrar items quan s\'executa useFetchGifs', () => {
        useFetchGifs.mockReturnValue({
            gifs: [{
                id: 'ABC',
                title: 'Manga',
                url: 'https://instagram.com'
            },
            {
                id: 'CBA',
                title: 'Comic',
                url: 'https://instagram.es'
            }],
            isLoading: false
        })

        render(<GifGrid key={category} category={category}/>)
        expect(screen.getByTestId('card-container').childElementCount).toBeGreaterThan(1)
    })
})