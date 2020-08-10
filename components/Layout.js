import Head from "next/head"
import Navbar from "./Navbar"

const Layout = (props) => (
    <div>
        <Head>
            <title>Bitcoin Prices</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/darkly/bootstrap.min.css"/>
        </Head>
        <Navbar/>
        <div className="container">
            {props.children}
        </div>
    </div>
)

export default Layout;