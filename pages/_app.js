import '../styles/globals.css'
import { GeistProvider, CssBaseline } from '@geist-ui/core'

const MyApp = ({ Component, pageProps }) => {
  return (
    <GeistProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  )
}

export default MyApp