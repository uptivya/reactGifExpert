import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    const lowerCaseNewCategory = newCategory.toLowerCase()
    if(categories.includes(lowerCaseNewCategory)) return;
    setCategories([lowerCaseNewCategory, ...categories])
  }

  return (
    <>
      {/* Títol */}
      <h1>GifExpertApp</h1>

      {/* Formulari */}
      < AddCategory onAddCategory={ onAddCategory }/>

      {/* Llistat de gifs */}
      {
        categories.map(category => 
          <GifGrid key={category} category={category} />
        )
      }
    </>
  )
}
