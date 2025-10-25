import { AppProps } from 'next/app'
import NavBar from "../components/NavBar"
import '../styles/global.css'

function App({ Component, pageProps }: AppProps) {
  return(
    <div>

    <Component {...pageProps} />
    </div>
  )
}

export default App