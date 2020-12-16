import * as React from 'react'
import styles from './styles.module.css'

interface Props {
  text: string
}

export const WishachusDiv = ({ text }: Props) => {
  return <div className={styles.test}>Wishachu's Example Component: {text}</div>
}
