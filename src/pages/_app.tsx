import '@/styles/globals.css'
import {Provider}from "jotai"
import type {AppProps} from 'next/app'
import {ThemeProvider} from 'next-themes'

export default function App({Component, pageProps}: AppProps) {

    return (
        <ThemeProvider attribute="class">
            <Provider>
                <Component {...pageProps} />
            </Provider>
        </ThemeProvider>
    )
}
