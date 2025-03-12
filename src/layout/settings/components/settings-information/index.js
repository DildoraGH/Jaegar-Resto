import { useContext } from 'react';
import classes from './index.module.css';
import { contextData } from '../../../../services/context-store';
import backArrow from '../../../../assets/icons/back-arrow.png';
import phone from '../../../../assets/icons/info-phone.png';
import map from '../../../../assets/icons/info-map.png';
import mail from '../../../../assets/icons/info-mail.png';
import site from '../../../../assets/icons/info-site.png';

const SettingsInformation = () => {
    const { changeActiveTab } = useContext(contextData);
    return (
        <div className={classes.info}>
            <div className={classes.back}>
                <button onClick={() => changeActiveTab(2)}><img src={backArrow} alt="arrow" /></button>
                <span>Information</span>
            </div>
            <div className={classes['info-content']}>
                <a href="tel:+998 71 000 00 71" target='_blank'><img src={phone} alt="phone" /> +998 71 000 00 71</a>
                <a href="https://goo.gl/maps/mC5s1MH5PTHwaXPj6" target='_blank'><img src={map} alt="map" /> Tashkent, str. Amir Temur 15</a>
                <a href="mailto:F.P.D_77@gmail.com" target='_blank'><img src={mail} alt="gamil" /> F.P.D_77@gmail.com</a>
                <a href="https://corporate-solutions.com/" target='_blank'><img src={site} alt="site" /> www.F.P.D_77.com</a>
            </div>
        </div>
    )
}

export default SettingsInformation