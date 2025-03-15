'use client';
import { Suspense, useContext, useEffect, useState } from 'react';
import { ReciepeContext } from '../layout';
import RecipeItem from '@/components/RecipeItem/RecipeItem';
import { ReciepeList } from '@/types/ReciepeList';

const Recipes = () => {
  const [recipeList, setRecipeList] = useState<ReciepeList[]>([]);

  const recipeInfo = useContext(ReciepeContext);

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${recipeInfo.recipeInfo.name}&cuisine=${recipeInfo.recipeInfo.cuisine}&maxReadyTime=${recipeInfo.recipeInfo.timeOfPreparation}&apiKey=${process.env.SPOONACULAR_API_KEY}`
      );
      const data = await response.json();
      setRecipeList(await data.results);
    };

    try {
      getRecipes();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <main className="p-4">
      <Suspense fallback={<div>Loading...</div>}>
        <RecipeItem recipeList={recipeList} />
      </Suspense>
    </main>
  );
};

export default Recipes;
