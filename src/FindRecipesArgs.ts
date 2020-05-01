import {ArgsType, Field} from 'type-graphql';

@ArgsType()
export default class FindRecipesArgs {

  @Field()
  keyword?: string;

}
