import {graphql, GraphQLObjectType, GraphQLSchema} from 'graphql';
import 'reflect-metadata';
import {buildSchemaSync} from 'type-graphql';
import Book from './Book';
import DummyResolver from './dummy/DummyResolver';

const schemaFromTypeGraphql = buildSchemaSync({
  resolvers: [DummyResolver],
  validate: false, // https://github.com/MichalLytek/type-graphql/issues/150
  orphanedTypes: [Book],
});

console.log(schemaFromTypeGraphql.getTypeMap())

const bookType = schemaFromTypeGraphql.getType('Book') as GraphQLObjectType;

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      book: {
        type: bookType,
        resolve() {
          const book = new Book();
          book.id = '111';
          book.title = 'title111';
          return book;
        },
      },
    },
  }),
});

const query = '{ book {id, title} }';

graphql(schema, query).then(result => {
  console.log(JSON.stringify(result));
});
