import './style.css'

type typeProps = {
  modalOpen: boolean,
  setOpen: (b: boolean) => void
  children: any
}
export const Overlay : React.FC<typeProps> = ({ modalOpen, setOpen, children }) => {
  return (
    <div className={`overlay ${modalOpen ? 'active ' : ''}`} onClick={() => setOpen(false)}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}