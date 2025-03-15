import { ReciepeList } from '@/types/ReciepeList';
import { redirect } from 'next/navigation';

interface RecipeItemProps {
  recipeList: ReciepeList[];
}

const RecipeItem = ({ recipeList }: RecipeItemProps) => {
  return (
    <ul className="flex justify-between flex-wrap">
      {recipeList.map((el: ReciepeList) => {
        return (
          <li
            key={el.id}
            className="w-[23%] bg-gray-400 p-4 rounded-lg flex flex-col items-center my-4 cursor-pointer"
            onClick={() => redirect(`recipes/${el.id}`)}
          >
            <img
              src={el.image}
              alt={el.title}
              className="rounded-lg"
            />
            <h2 className="font-bold text-xl text-center mt-2">{el.title}</h2>
          </li>
        );
      })}
    </ul>
  );
};

export default RecipeItem;
