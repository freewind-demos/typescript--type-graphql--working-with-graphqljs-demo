import {graphql} from 'graphql';
import 'reflect-metadata';
import {buildSchema} from 'type-graphql';
import DummyResolver from './DummyResolver';
import MyOrphanedType from './MyOrphanedType';
import Recipe from './Recipe';
import path from 'path';

// import RecipeResolver from './RecipeResolver';

async function main() {
  const schema = await buildSchema({
    resolvers: [DummyResolver],
    // container: ResolveContainer,
    validate: false, // https://github.com/MichalLytek/type-graphql/issues/150
    orphanedTypes: [MyOrphanedType],
    emitSchemaFile: path.resolve(__dirname, '../dist/schema.graphql')
  });

  // graphql(schema, '{ recipes { title }}').then(result => {
  //   console.log(JSON.stringify(result));
  // });
  //
  // graphql(schema, '{ recipe(id:"111") { title }}').then(result => {
  //   console.log(JSON.stringify(result));
  // });
  //
  // graphql(schema, '{ searchRecipes(keyword:"00") { title }}').then(result => {
  //   console.log(JSON.stringify(result));
  // });
}

main();
