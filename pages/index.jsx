import Head from 'next/head'
import Home from '../components/home/Home'

const index = ()=>{
    return(
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;400;500;700&display=swap" rel="stylesheet"/>
            </Head>
            <div className="container">
                <Home/>
            </div>
        </>
    )
}

export default index