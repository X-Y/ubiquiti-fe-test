import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {Lato} from 'next/font/google'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
  <QueryClientProvider client={queryClient}>

    <main className={`${lato.className}`}>
      <Component {...pageProps} />
    </main>
  </QueryClientProvider>)
  ;
}
