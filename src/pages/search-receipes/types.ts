export type RecipeApi = {
  id: number;
  image: string;
  imageType: string;
  missedIngredientCount: number;
  title: string;
  unusedIngredients: [];
  usedIngredientCount: number;
  usedIngredients: [
    {
      aisle: string;
      amount: number;
      id: number;
      image: string;
      meta: [];
      name: string;
      original: string;
      originalName: string;
      unit: string;
      unitLong: string;
      unitShort: string;
    }
  ];
};
