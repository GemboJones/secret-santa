import { Form } from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'
import Upload from 'src/components/Upload'
import ShowHidePassword from 'src/components/ShowHidePassword/ShowHidePassword'

const AcceptPage = () => {
  return (
    <>
      <MetaTags title="Accept" description="Accept page" />
      <h3 className="m-0 mb-10 p-0 text-center font-handwriting text-3xl uppercase leading-none text-white">
        Awesome!
      </h3>
      <HeaderWithRulers className="text-white" heading="Sign up" />
      <Form className='max-w-[660px] w-full mx-auto'>
        <ShowHidePassword label="password" name="password" />
        <Upload />
        <button type='submit'>Submit</button>
      </Form>
    </>
  )
}

export default AcceptPage
