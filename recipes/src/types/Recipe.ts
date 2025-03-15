export type Recipe = {
  image: string;
  title: string;
  summary: string;
  extendedIngredients: {
    id: number;
    nameClean: string;
    amount: number;
    consistency: string;
  }[];
};
