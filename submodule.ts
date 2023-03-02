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