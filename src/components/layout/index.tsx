import { PropsWithChildren } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
