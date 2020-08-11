import Link from "next/link"
import Layout from "../components/Layout"


const about = () => (
    <Layout>
        <div>
        <h1>
            About page
        </h1>
        <p>
            This app uses nextJs and the coindesk API to fetch the prices of bitcoin in different currency.
            The Fetch is done using isomorphic-unfetch package.
        </p>
    </div>
    </Layout>
    
)

export default about