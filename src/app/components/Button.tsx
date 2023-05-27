import { ReactNode } from 'react'
import { motion } from 'framer-motion'

type ButtonProps = {
  text?: string
  className?: string
  children?: ReactNode
}

const Button: React.FC<ButtonProps> = ({ text, children }) => {
  return (
    <motion.button
      className="btn"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {`${text}`}
      {children}
    </motion.button>
  )
}

export default Button
