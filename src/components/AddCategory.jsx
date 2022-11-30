import { useState } from "react";

export const AddCategory = ({onAddCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (inputValue == null || inputValue.trim() === '') return;
        onAddCategory(inputValue);
        setInputValue('');
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input type="text" placeholder="Search new gifs" value={inputValue} onChange={ onInputChange } />
            <button type="submit">Send</button>
        </form>
    )
}