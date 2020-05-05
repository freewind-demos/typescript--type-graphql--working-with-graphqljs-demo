import {Field, ID, ObjectType} from 'type-graphql';

@ObjectType()
export default class MyOrphanedType {
  @Field(type => ID)
  id!: string;

  @Field()
  title!: string;

}
