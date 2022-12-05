import { getGifs } from "../../src/helpers/getGifs"

const category = 'manga'

describe('test in getGifs function', () => {
    test('getGifs should return a gif', async() => {
        const gifs = await getGifs(category);
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    })
})