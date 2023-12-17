import { useState } from "react"
import Icon from "../Icon/Icon"

const ShowHidePassword = ({ label, name }) => {

  const [isPasswordShowing, setIsPasswordShowing] = useState(false)

  const handleClick = () => {
    setIsPasswordShowing((prevValue) => !prevValue)
  }

  return (
    <div className="field relative">
      <label htmlFor={name}>{label}</label>

      {isPasswordShowing ? (
        <input type="text" name={name} placeholder="" required />
      ) : (
        <input type="password" name={name} placeholder="" required />
      )}

      <button className="absolute right-6 top-8" onClick={handleClick}>
        {isPasswordShowing ? (
          <Icon id="eyeOpened" size={32} />
        ) : (
          <Icon id="eyeClosed" size={32} />
        )}
      </button>
    </div>
  )
}

export default ShowHidePassword
