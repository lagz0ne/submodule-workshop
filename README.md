### Simpliest application ever

Having a file called `test.ts`

```typescript
export default function() {
  console.log('hello world')
}
```

Execute function by running `yarn submodule -r . test`

- `submodule` is the cli
- `-r .` indicating the route directory is the current
- `test` is the name of the file. The app expects the default function to be exported, as such, it executed the corresponding function

