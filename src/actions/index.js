export const SET_RECIPES = 'SET_RECIPIES';

export function setRecipes(items) {
  return {
    type: SET_RECIPES,
    items
  }
}