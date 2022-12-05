import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components"

describe('Proves a <AddCategory />', () => {
    const title = 'manga';
    test('Ha de canviar el valor de la caixa de text', () => {
        render(<AddCategory onAddCategory={() => {}}/>);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: {value: title} });

        expect(input.value).toBe(title);
    })

    test('El formulari ha de fer submit', () => {
        const onAddCategory = jest.fn();

        render(<AddCategory onAddCategory={onAddCategory}/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: {value: title} });
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onAddCategory).toHaveBeenCalledWith(title);
    })

    test('No ha de cridar onAddCategory si l\'input està buit', () => {
        const onAddCategory = jest.fn();
        render(<AddCategory onAddCategory={onAddCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: {value: ''} });
        fireEvent.submit(form);

        expect(onAddCategory).toHaveBeenCalledTimes(0);
        expect(onAddCategory).not.toHaveBeenCalled();
    })
})