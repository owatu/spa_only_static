import { createSignal } from "solid-js"

export default function createSignalObject<T>(...params: Parameters<typeof createSignal<T>>) {
  const [state, set] = createSignal<T>(...params)

  return {
    get get() {
      return state()
    },
    set,
  }
}