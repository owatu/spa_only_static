import { createEffect } from "solid-js"
import createSignalObject from "../utils/createSignalObject"

export default function Root() {
  const startTime = createSignalObject(Date.now())
  const elapsed = createSignalObject(Date.now() - startTime.get)

  createEffect(() => {
    const timer = setInterval(() => {
      elapsed.set(Date.now() - startTime.get)
    }, 10)
    return () => clearInterval(timer)
  })

  return (
    <>
      <div style={{ "font-size": "2em", "text-align": "center" }}>
        <details>
          <summary></summary>
          <p>actually: {(elapsed.get / 1000).toFixed(2)} s</p>
        </details>
        <p>{(elapsed.get / 1000 / 1.3).toFixed(2)} s</p>
      </div>
    </>
  )
}
