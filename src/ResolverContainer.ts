import RecipeResolver from './RecipeResolver';
import RecipeService from './RecipeService';

const recipeResolver = new RecipeResolver(new RecipeService());

const ResolveContainer = {
  get: (ResolveClass: new (...args: any[]) => any) => {
    if (ResolveClass === RecipeResolver) {
      return recipeResolver;
    }
    return new ResolveClass();
  }
}

export default ResolveContainer;
