### Simpliest application ever

`test.ts` is now moved to `routes` directory. We changed the content to return `hello world` string

We turned the application into a web server by adding
```typescript
import type { Submodule } from "@submodule/cli";
import express from "express"

export default {
  
  async createCommands({ router }) {
    const routePaths = Object.keys(router)

    const server = express()

    server.all('/', (req, res) => res.send('hello'))

    for (const routePath of routePaths) {
      const route = router[routePath]
      
      server.get('/' + routePath, async (req, res) => {
        const result = await route.handle()
        res.send(result)
      })
    }

    server.listen(3000);
    console.log('server is listening at port:', 3000)
  }

} satisfies Submodule
```

By running `yarn submodule`, now we'll see `server is listening at port: 3000`. Visiting `localhost:3000/test` should gives us `hello world`

So, `submodule` loads `submodule.ts` automatically, execute `createCommands`, pass in a router, which contains the implementation of all routes, then start a server

You can also use `yarn submodule -d` to run in dev mode, server will just restart on every changes