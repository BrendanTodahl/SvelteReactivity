import Layout from '../src/components/layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div class="container">
        <div class="card">
          <div class="card-body">
            <Component {...pageProps} />
          </div>
        </div>  
      </div>
    </Layout>
  )
}

export default MyApp
