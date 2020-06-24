import fetch from 'isomorphic-unfetch'
import Layout from '../../components/Layout'

const Index = () => {
    return (
        <Layout>
            <div>Index Page</div>
        </Layout>
    )
}

Index.getInitialProps = async () => {
    const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD')
    const data = await res.json()
    return {
        data,
        ryan: 'a brand new harley'
    }
}

export default Index