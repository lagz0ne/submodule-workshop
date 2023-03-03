import type { ZeroToOne } from "../submodule.types"

const plus: ZeroToOne.RouteFn<{ left: string, right: string }> = ({ input: { left, right }}) => {
  return Number(left) + Number(right)
}

export default plus