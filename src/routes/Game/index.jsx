import MenuHeader from '../../components/MenuHeader'

import s from './style.module.css'

const GamePage = ({ onChangePage }) => {
  const handleClick = () => {
    onChangePage && onChangePage('app')
  }

  return (
    <>
      <MenuHeader bgActive={true} />
      <div className={s.pad_70}>
        <h1>This is Game Page!!!</h1>
        <button onClick={handleClick}>Return HomePage</button>
      </div>
    </>
  )
}

export default GamePage
