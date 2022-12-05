import { render,screen } from "@testing-library/react"
import { GifList } from "../../src/components/GifList"


describe('Gif List should work properly', () => { 
    const title="Manga"
    const url="www.instagram.es"

    /* test('Debe hacer match con el snapshot', () => {
        const { container } = render(<GifList url={url} title={title}/>)
        //expect(container).toMatchSnapshot();
    }) */
    
    /* test('Imatge amb url i alt indicats', () => {
        render(<GifList url={url} title={title}/>)
        const {alt, src} = screen.getByRole('img');
        expect(alt).toBe(title);
        const newSrc = src.replace('http://localhost/','');
        expect(newSrc).toBe(url);
    }) */
    
    test('<GifList /> has title', () => {
        render(<GifList url={url} title={title}/>)
        expect(screen.getByText(title)).toBeTruthy();
    })
})