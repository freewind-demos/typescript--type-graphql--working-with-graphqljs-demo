import {Field, ObjectType, Query, Resolver} from 'type-graphql';

@ObjectType()
class DummyType {
  @Field()
  id!: string
}

@Resolver(DummyType)
export default class DummyResolver {
  @Query(returns => DummyType)
  dummy() {
  }
}
