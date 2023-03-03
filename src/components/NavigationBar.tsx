import React from 'react'
import './styles.scss';

type Props = {
    children?: JSX.Element | JSX.Element[];
}

const NavigationBar:React.FC<Props> = ({children}:Props) => {
  return (
    <div className='navigation'>
      hehe
      {children}
    </div>
  )
}

export default NavigationBar
