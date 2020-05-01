TypeScript "type-graphql" Demo
===========================

与通常的graphql开发流程正好相反：
1. 通过class+decorator定义class
2. 生成相应的graphql需要的schema

有些地方需要注意：
1. 很多Field需要显示定义类型
2. buildSchema处指定resolver实例的办法有点复杂，原因是type-graphql默认基于dependency injection来设计，所以如果我们不想用，反而比较麻烦（不过也还好）

```
npm install
npm run demo
```
