import Icon from '../Icon/Icon'

const RsvpButton = ({className, heading, icon}) => {
  return (
    <button className='relative pl-[72px] pr-12 ml-[72px] h-[115px] max-w-[300px] bg-white text-left text-3xl font-bold leading-none tracking-tight'>
      <div className={`absolute -left-[72px] -top-2 center h-[132px] w-[132px] rounded-full border-[6px] border-white ${className}`}>
        <Icon id={icon} size={72} />
      </div>
      {heading}
    </button>
  )
}

export default RsvpButton
