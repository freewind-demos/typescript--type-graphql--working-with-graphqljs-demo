import {Arg, Args, Query, Resolver} from 'type-graphql';
import FindRecipesArgs from './FindRecipesArgs';
import Recipe from './Recipe';
import RecipeService from './RecipeService';

@Resolver(Recipe)
export default class RecipeResolver {
  constructor(private recipeService: RecipeService) {
  }

  @Query(returns => [Recipe])
  recipes(): Recipe[] {
    return this.recipeService.all();
  }

  @Query()
  recipe(@Arg("id") id: string): Recipe {
    const recipe = this.recipeService.findById(id);
    if (recipe === undefined) {
      throw new Error(id);
    }
    return recipe;
  }

  @Query(returns => [Recipe])
  searchRecipes(@Args() {keyword}: FindRecipesArgs): Recipe[] {
    return this.recipeService.search(keyword);
  }

}
