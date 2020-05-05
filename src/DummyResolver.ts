import {ObjectType, Resolver} from 'type-graphql';

@ObjectType()
class DummyType {
}

@Resolver(DummyType)
export default class DummyResolver {
}
