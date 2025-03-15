'use client';
import { cuisines } from '@/utils/cuisines';
import Button from '../Button/Button';
import DropDown from '../DropDown/DropDown';
import { useContext, useState } from 'react';
import { redirect } from 'next/navigation';
import { ReciepeContext } from '@/app/layout';

const SearchBar = () => {
  const [recipeName, setRecipeName] = useState<string>('');
  const [cuisine, setCuisine] = useState<string>('Asian');
  const [timeOfPreparation, setTimeOfPreparation] = useState<string>('120');

  const { setRecipeInfo } = useContext(ReciepeContext);

  const saveRecipe = () => {
    setRecipeInfo({
      name: recipeName,
      cuisine: cuisine,
      timeOfPreparation: parseFloat(timeOfPreparation),
    });
    redirect('/recipes');
  };

  return (
    <>
      <label
        htmlFor="search"
        className="w-1/4"
      >
        <h2 className="mt-4 font-bold text-xl">Select cuisine</h2>
        <input
          className="focus:outline-none bg-gray-400 rounded-lg w-full pl-2 h-10"
          type="text"
          id="search"
          placeholder="Enter recipe name"
          value={recipeName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setRecipeName(e.target.value)
          }
        />
      </label>
      <h2 className="mt-4 font-bold text-xl w-1/4">Select cuisine</h2>
      <DropDown
        optionsList={cuisines}
        value={cuisine}
        onSelect={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setCuisine(e.target.value)
        }
      />
      <label
        htmlFor="preparation"
        className="w-1/4"
      >
        <h2 className="mt-4 font-bold text-xl">Set max time for preparing</h2>
        <input
          type="number"
          className="w-full h-10 pl-2 bg-gray-400 outline-none rounded-lg"
          value={timeOfPreparation}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTimeOfPreparation(e.target.value)
          }
        />
      </label>
      <Button
        title="Next"
        onClick={saveRecipe}
        style="mt-6 w-1/4"
        isDisabled={!recipeName.length && !timeOfPreparation && !cuisine.length}
      />
    </>
  );
};

export default SearchBar;
