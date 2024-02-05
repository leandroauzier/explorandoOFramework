import GlobalStyle from "../src/theme/GlobalStyle";

export default function myApp({ Component , pageProps}){
    return (
        <>
            <GlobalStyle/>
            <Component {...pageProps}/>
        </>
    )
}