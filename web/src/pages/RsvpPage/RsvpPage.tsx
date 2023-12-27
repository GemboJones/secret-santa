import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'
import RsvpButton from 'src/components/RsvpButton/RsvpButton'

const RsvpPage = () => {
  return (
    <>
      <MetaTags title="RSVP" description="RSVP page"/>
      <HeaderWithRulers className='text-white' heading="YOU'RE INVITED TO" />
      <h1 className='page-title'>Jones Christmas</h1>
      <h3 className='font-handwriting uppercase m-0 mb-10 p-0 text-3xl leading-none text-white text-center'>December 23, 2023</h3>
      <div className='flex justify-center gap-7'>
        <RsvpButton className='bg-spanishGreen text-white' heading="I'll Be There!" icon='thumbsUp' />
        <RsvpButton className='bg-orangeRed text-white' heading='Regretfully Decline' icon='thumbsDown' />
      </div>
    </>
  )
}

export default RsvpPage
