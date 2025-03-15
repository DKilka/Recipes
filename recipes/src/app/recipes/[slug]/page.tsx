'use client';
import { Recipe } from '@/types/Recipe';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const Recipe = () => {
  const [recipe, setRecipe] = useState<Recipe>();

  const params = useParams();

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${params.slug}/information?apiKey=${process.env.SPOONACULAR_API_KEY}`
      );
      const data = await response.json();
      setRecipe(await data);
    };

    try {
      getRecipes();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    recipe && (
      <main className="flex m-4 rounded-lg">
        <aside className="w-1/3 p-4 bg-gray-400 rounded-lg">
          <img
            src={recipe.image}
            alt={recipe.title}
          />
          <h2 className="font-bold text-xl text-center mt-4">{recipe.title}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: recipe.summary }}
            className="text-xl mt-6"
          ></div>
        </aside>
        <section className="bg-gray-400 w-full mx-4 p-4 rounded-lg">
          <h2 className="font-bold text-3xl">Ingridients</h2>
          <ul>
            {recipe.extendedIngredients.map((ingridient: any) => {
              return (
                <li
                  key={ingridient.id}
                  className="text-xl mt-2"
                >
                  <h2 className="font-bold ml-2">{ingridient.nameClean}</h2>
                  <div className="ml-4">Amount: {ingridient.amount}</div>
                  <div className="ml-4">
                    Consistency: {ingridient.consistency}
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    )
  );
};

export default Recipe;
