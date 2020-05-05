import {Field, ID, InputType, ObjectType} from 'type-graphql';

@ObjectType("Book")
@InputType("BookInput")
export default class Book {
  @Field(type => ID)
  id!: string;

  @Field()
  title!: string;

}
