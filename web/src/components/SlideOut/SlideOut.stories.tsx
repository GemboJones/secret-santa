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

import SlideOut from './SlideOut'

const meta: Meta<typeof SlideOut> = {
  component: SlideOut,
}

export default meta

type Story = StoryObj<typeof SlideOut>

export const Primary: Story = {
  render: () => (
    <SlideOut handleClose={()=> {}}>
      <div className='text-white'>SlideOut</div>
    </SlideOut>
  )
}
