import { Form } from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'
import Upload from 'src/components/Upload'
import ShowHidePassword from 'src/components/ShowHidePassword/ShowHidePassword'

const AcceptPage = () => {
  return (
    <>
      <MetaTags title="Accept" description="Accept page" />
      <h3 className="m-0 mb-2 p-0 text-center font-handwriting text-3xl uppercase leading-none text-white">
        Awesome!
      </h3>
      <HeaderWithRulers className="text-white" heading="Sign up" />
      <Form className="relative mx-auto w-full max-w-[660px]">
        <div className="field">
          <ShowHidePassword label="password" name="password" />
        </div>
        <div className="field">
          <Upload />
        </div>
        <div className="field">
          <button type="submit">Submit</button>
        </div>
      </Form>
    </>
  )
}

export default AcceptPage
