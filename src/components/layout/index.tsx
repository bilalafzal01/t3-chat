import { PropsWithChildren } from 'react'
import Navbar from './Navbar'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
    </>
  )
}

export default Layout
