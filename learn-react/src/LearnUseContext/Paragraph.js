import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function Paragraph() {
  const context = useContext(ThemeContext)

  return (
    <h1 className={context.theme}>Hello world</h1>
  )
}

export default Paragraph