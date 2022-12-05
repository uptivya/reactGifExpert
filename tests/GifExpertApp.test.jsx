import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Proves a <GifExpertApp />', () => {
    test('should categories add new category', () => {
        const category = 'Manga';
        render(<GifExpertApp/>)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: category}})
        fireEvent.submit(form);

        expect(screen.getByText(category.toLowerCase()));

        fireEvent.input(input, {target: {value: category}})
        fireEvent.submit(form);

        expect(screen.getAllByRole('heading', {level:3}).length).toBe(1)
    })
})