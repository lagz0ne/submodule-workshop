### Simpliest application ever

A server without any configuration is unrealistic and not technically useful. To address that, we addeded

`submodule.types.ts`, this file will help us define what the shape of a configuration looks like. In this example, we use `port: number` to define port for Express

`createCommands` will send the config over, as such, we can consume the port while setting up the server