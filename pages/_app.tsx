import '../styles/globals.sass'
import type { AppProps } from 'next/app'
import { wrapper } from "../store"
import { Provider } from "react-redux"

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <Component {...pageProps} />
      </>
  )
}

export default wrapper.withRedux(MyApp)
// export default MyApp
