import { type } from 'os'
import './style.css'

type typeProps = {
  modalOpen: boolean,
  setOpen: (b: boolean) => void
  children: any
}
//Сделать по видосу https://www.youtube.com/watch?v=i2Yf7JZonB4
// https://www.youtube.com/watch?v=ZCvemsUfwPQ
// https://www.youtube.com/watch?v=LyLa7dU5tp8
export const Overlay : React.FC<typeProps> = ({ modalOpen, setOpen, children }) => {
  return (
    <div className={`overlay ${modalOpen ? 'active ' : ''}`} onClick={() => setOpen(false)}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}