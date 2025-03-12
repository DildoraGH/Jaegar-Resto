import { useContext, useState, useEffect } from 'react';
import Toggle from '../../components/toggle';
import { contextData } from '../../services/context-store';
import SettingsContent from './components/settings-content';
import SettingsInformation from './components/settings-information';

const Settings = () => {
    const { activeTab } = useContext(contextData);
    const [changeContent, setChangeContent] = useState(false);

    useEffect(() => {
        setChangeContent(false);
      }, [activeTab])

    return (
        <>
            <Toggle active={(activeTab === 1 && !changeContent) ? true : false}>
                <SettingsContent changeContent={() => setChangeContent(true)}/>
            </Toggle>
            <Toggle active={(activeTab === 1 && changeContent) ? true : false}>
                <SettingsInformation />
            </Toggle>
        </>
    )
}

export default Settings