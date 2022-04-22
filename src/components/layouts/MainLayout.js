import Head from "next/head"
import Footer from "../shared/Footer"
import Navbar from "../shared/Navbar"

const MainLayout=({children, title='' })=> {
  return (

  <>
    <Head>

        <link rel="icon" href="/favicon/favicon-96x96.png" />
        <title> {title} |My Project </title>

    </Head>

    <Navbar />
    <div style={{paddingTop:'63px'}}>
       {children}
    </div>
    <Footer />

    
    
    
    
  </>
  )
}

export default MainLayout