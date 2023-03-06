import React from 'react'
import './styles.scss';

type Props = {
    children?: JSX.Element | JSX.Element[];
}

const NavigationBar:React.FC<Props> = ({children}:Props) => {
  return (
    <div className='navigation' data-testid='navigation'>
      <div className='title' data-testid='nav-title'>Movie Gallery</div>
      {children}
    </div>
  )
}

export default NavigationBar
