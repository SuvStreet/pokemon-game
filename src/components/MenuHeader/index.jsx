import { useState } from 'react'

import Menu from '../Menu'
import NavBar from '../Navbar'

const MenuHeader = ({ bgActive }) => {
  const [isOpen, setOpen] = useState(null)

  const handleClickMenu = () => {
    setOpen((prevState) => !prevState)
  }

  const handleClickHamburg = () => {
    setOpen((prevState) => !prevState)
  }

  return (
    <>
      <Menu isOpen={isOpen} onClickMenu={handleClickMenu} />
      <NavBar
        isOpen={isOpen}
        bgActive={bgActive}
        onClickHamburg={handleClickHamburg}
      />
    </>
  )
}

export default MenuHeader
