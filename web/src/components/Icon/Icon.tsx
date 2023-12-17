const Icon = ({id, size = 30}) => {
  return (
    <svg width={size} height={size}>
      <use href={`/icons/sprite.svg#${id}`}/>
    </svg>
  )
}

export default Icon
