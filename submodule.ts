import type { Submodule } from "@submodule/cli";
import express from "express"
import type { ZeroToOne } from "./submodule.types";

export default {
  
  createConfig() {
    return { port: Number(process.env.EXPRESS_PORT || 3000)}  
  },

  async createCommands({ router, config }) {
    const routePaths = Object.keys(router)

    const server = express()

    server.all('/', (req, res) => res.send('hello'))

    for (const routePath of routePaths) {
      const route = router[routePath]
      
      server.get('/' + routePath, async (req, res) => {
        const result = await route.handle({})
        res.send(result)
      })
    }

    server.listen(config.port);
    console.log('server is listening at port:', config.port)
  }

} satisfies Submodule<ZeroToOne.Config>