import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <div className="bg-t-black text-t-white bg-[url('/assets/bg.png')] bg-no-repeat bg-center bg-cover">
        <Component {...pageProps} />
      </div>
  );
}

export default MyApp
