import classes from './index.module.css';
import backArrow from '../../../../assets/icons/back-arrow.png';
import info from '../../../../assets/icons/settings-information.png';
import lang from '../../../../assets/icons/settings-lang.png';
import history from '../../../../assets/icons/order-history.png';
import { useContext } from 'react';
import { contextData } from '../../../../services/context-store';

const SettingsContent = ({changeContent}) => {
    const { changeActiveTab } = useContext(contextData);
    return (
        <div className={classes.settings}>
            <div className={classes.back}>
                <button onClick={() => changeActiveTab(2)}><img src={backArrow} alt="arrow" /></button>
                <span>Settings</span>
            </div>
            <div className={classes['settings-content']}>
                <button onClick={changeContent}>
                    <img src={info} alt="Information" />
                    <span>Information</span>
                </button>
                <button onClick={() => { }}>
                    <img src={lang} alt="Language" />
                    <span>Language</span>
                </button>
                <button onClick={() => { }}>
                    <img src={history} alt="Order history" />
                    <span>Order history</span>
                </button>
            </div>
        </div>
    )
}

export default SettingsContent