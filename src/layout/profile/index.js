import { useContext } from 'react';
import Toggle from '../../components/toggle';
import classes from './index.module.css';
import { contextData } from '../../services/context-store';
import orderHistory from '../../assets/icons/order-history.png';
import backArrow from '../../assets/icons/back-arrow.png';

const Profile = () => {
  const { activeTab, changeActiveTab } = useContext(contextData);

  return (
    <Toggle active={(activeTab === 8) && true}>
      <div className={classes.profile}>
        <div className={classes.back}>
          <button onClick={() => changeActiveTab(2)}><img src={backArrow} alt="arrow" /></button>
          <span>Orders</span>
        </div>
        <div className={classes['profile-info']}>
          <div>
            <span>X</span>
            <h5>X Man</h5>
          </div>
          <p>Edit profile</p>
        </div>
        <div className={classes['order-history']}>
          <img src={orderHistory} alt="" />
          <p>Order history</p>
        </div>
      </div>
    </Toggle>
  )
}

export default Profile