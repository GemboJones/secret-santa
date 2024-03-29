import Icon from "../Icon/Icon"
import Overlay from "../Overlay/Overlay"

const SlideOut = ({ children, handleClose }) => {
  return (
    <>
      <Overlay />
      <div className="fixed bottom-0 right-0 top-0 h-screen w-3/4 overflow-y-scroll bg-spanishGreen px-[140px] py-[100px] dark:bg-blackPearl">
        <button
          className="fixed right-6 top-6 dark:text-white"
          onClick={handleClose}
        >
          <Icon id="close" size={64} />
        </button>
        {children}
      </div>
    </>
  )
}

export default SlideOut
