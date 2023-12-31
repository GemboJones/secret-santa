// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import Card from './Card'

const meta: Meta<typeof Card> = {
  component: Card,
}

export default meta

type Story = StoryObj<typeof Card>

export const Primary: Story = {
  args: {
    avatar: {
      avatar: '/images/avatar-01.png'
    },
    name: 'Amy Dutton',
    email: 'amy@redwoodjs.com',
    isCloseShowing: false
  }
}

export const closeButtonIsShowing: Story = {
  args: {
    avatar: {
      avatar: '/images/avatar-01.png'
    },
    name: 'Amy Dutton',
    email: 'amy@redwoodjs.com',
    isCloseShowing: true
  }
}

