import Layout from '@/components/Layout'
import '@/styles/globals.css'
import { useState } from 'react'



export default function App({ Component, pageProps }) {
  const [page,setPage] = useState('Acceuil')
  return<>
  <Layout setPage={setPage}>
    <Component page={page} {...pageProps} />
    </Layout>
  </>
}
