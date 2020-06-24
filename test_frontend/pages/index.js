import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Rates from '../components/Rates'

const Index = (props) => {
    return (
        <Layout>
            <div>Rate Exchanger</div>
            <Rates rates={props.data}/>
        </Layout>
    )
}

Index.getInitialProps = async () => {
    const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD')
    const data = await res.json()
    return {
        data
    }
}

export default Index