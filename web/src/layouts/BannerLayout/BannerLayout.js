import Navbar from 'src/components/Navbar'

const BannerLayout = ({ children }) => {
  return (
  <>
    <header>
      <Navbar />
    </header>
    <main>{children}</main>
  </>
  )
}

export default BannerLayout
