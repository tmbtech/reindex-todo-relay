# reindex-starter-kit

Sample code to get started with Reindex, React and Relay.
[Demo Page](http://reindex-todo.surge.sh/)

Based on https://www.reindex.io/docs/tutorial/

```
npm install
```

Set `REINDEX_URL` env variable to be your be your Reindex app url. Set
`REINDEX_TOKEN` to be your Reindex admin token.

```
export REINDEX_URL="https://YOUR-REINDEX-APP.myreindex.com"
export REINDEX_TOKEN="YOUR-REINDEX-TOKEN"
```

Fetch current version of your GraphQL schema (you can add `ReindexSchema.json`)
to git after that. Also fetch Relay schema (saved as ./data/schema.json).

```
npm run schema-fetch
npm run schema-relay
```

Run and open on localhost:3000

```
npm start
```

Play with GraphiQL

```
npm run graphiql
```

Note that authentication will work only once you enable authentication providers
inside your Reindex console.

## Deploying

Build minified js and css

```
npm run build
```

You can now push `public/` directory to your favorite static page hosting.

### Surge.sh - Static hosting
https://surge.sh/help/getting-started-with-surge

```
cd public/
surge .
```



