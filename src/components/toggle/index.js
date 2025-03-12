import { useContext } from 'react';
import classes from './index.module.css';
import { contextData } from '../../services/context-store';

const Toggle = ({ children, active }) => {

const { changeActiveTab } = useContext(contextData);

  return (
    <>
      <div
        className={`${classes['cart-back']} ${active ? classes.active : ''}`}
        onClick={() => changeActiveTab(2)}
      />
      <div className={`${classes.toggle} ${active ? classes.active : ''}`}>
        {children}
      </div>
    </>
  )
}

export default Toggle;