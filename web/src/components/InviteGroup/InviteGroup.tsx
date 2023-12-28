import Card from '../Card/Card'
import RoundButton from '../RoundButton/RoundButton'

const InviteGroup = () => {
  return (
    <div>
      <div className="label ml-5">Invite a friend or family member</div>
      <div className="mb-10 ml-5 flex items-center gap-5 bg-spanishGreen p-4 dark:bg-nileBlue">
        <div className="field relative mb-0 flex-1">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder="" />
        </div>
        <div className="field relative mb-0 flex-1">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="" />
        </div>
        <RoundButton status="warning" />
      </div>
      <div className="grid grid-cols-2 gap-x-12 gap-y-8">
        <Card
          avatar={{ avatar: '/images/avatar-01.png' }}
          isCloseShowing="true"
          name="Amy Simmons"
          email="amy@example.com"
        />
        <Card
          avatar={{ avatar: '/images/avatar-02.png' }}
          isCloseShowing="true"
          name="Steve Daniels"
          email="steve@example.com"
        />
        <Card
          avatar={{ avatar: '/images/avatar-03.png' }}
          isCloseShowing="true"
          name="Sam Montgomery"
          email="sam@example.com"
        />
        <Card
          avatar={{ avatar: '/images/avatar-04.png' }}
          isCloseShowing="true"
          name="Claire Gogh"
          email="claire@example.com"
        />
      </div>
    </div>
  )
}

export default InviteGroup
