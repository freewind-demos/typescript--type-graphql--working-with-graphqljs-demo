import Recipe from './Recipe';

function applyOn<T>(t: T, fn: (t: T) => void): T {
  return t;
}

function createRecipe(args: { [key in keyof Recipe]: Recipe[key] }): Recipe {
  return Object.assign(new Recipe(), args);
}

const allRecipes: Recipe [] = [
  createRecipe({
    id: '111',
    title: 'aaa000',
    description: 'aaaaaaa',
    creationDate: new Date(),
    ingredients: ['a1', 'a2'],
  }),
  createRecipe({
    id: '222',
    title: 'bbb000',
    description: 'bbbbbbb',
    creationDate: new Date(),
    ingredients: ['b1', 'b2'],
  }),
  createRecipe({
    id: '333',
    title: 'ccc000',
    description: 'ccccccc',
    creationDate: new Date(),
    ingredients: ['c1', 'c2'],
  }),
]

export default class RecipeService {
  all(): Recipe[] {
    return allRecipes;
  }

  findById(id: string): Recipe | undefined {
    return allRecipes.find(it => it.id === id);
  }

  search(keyword?: string): Recipe[] {
    if (keyword) {
      return allRecipes.filter(it => it.title.includes(keyword) || it.description?.includes(keyword));
    } else {
      return allRecipes;
    }
  }
}
