'use client';
import { createContext, useState } from 'react';
import { RecipeInfo } from '@/types/ReciepeInfo';

import './globals.css';

export const ReciepeContext = createContext<{
  recipeInfo: RecipeInfo;
  setRecipeInfo: (recipe: RecipeInfo) => void;
}>({
  recipeInfo: { name: '', cuisine: '', timeOfPreparation: 0 },
  setRecipeInfo: (e: RecipeInfo) => {},
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [recipeInfo, setRecipeInfo] = useState<RecipeInfo>({
    name: '',
    cuisine: 'Asian',
    timeOfPreparation: 200,
  });

  return (
    <html lang="en">
      <body className="bg-gray-700 h-screen w-screen">
        <ReciepeContext.Provider value={{ recipeInfo, setRecipeInfo }}>
          {children}
        </ReciepeContext.Provider>
      </body>
    </html>
  );
}
