import Footer from "src/components/Footer/Footer"

type AuthLayoutProps = {
  children?: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <main className="min-w-screen min-h-screen bg-auth bg-silverTree dark:bg-nileBlue bg-[center_top] bg-no-repeat bg-[length:1440px_auto] min[1440px]:bg-[length:100%_auto]">
        <img src="/images/logo__secret-santa.svg" alt="secret santa" className="mx-auto mb-14 w-[460px] pt-24"/>
      {children}
      </main>
    <Footer />
    </>
  )
}

export default AuthLayout
