import useVisualize from "./visualize/useVisualize";
import {ReactNode, useEffect, useState} from "react";
import {
    applicationPageStart,
    inputControlsPageStart,
    inputControlsTypesPageStart,
    schedulerPageStart
} from "./constants/liveSamplesConstants";
import InputControlsLiveSample from "./InputControlsLiveSample/InputControlsLiveSample";
// import {SchedulerLiveSample} from "./SchedulerLiveSample/SchedulerLiveSample";
import App from "./endToEndPluginFlow/App";
import InputControlTypes from "./InputControlTypes/InputControlTypes.tsx";

const visualizeUrl = "https://mobiledemo.jaspersoft.com/jasperserver-pro/client/visualize.js";
// const visualizeUrl = "https://localhost:8443/jasperserver-pro/client/visualize.js";

const getLiveSamplePage = (pageName: string, vContainer: any) => {
    switch (pageName){
        case 'inputControls':
            return <InputControlsLiveSample vContainer={vContainer}/>
        case 'inputControlsTypes':
            return <InputControlTypes vContainer={vContainer}/>
        // case 'scheduler':
        //         return <SchedulerLiveSample vContainer={vContainer}/>
        case 'application':
            return <App visualize={vContainer}/>
        default:
            return <></>

    }
}

const Main = () => {
    const vContainer = useVisualize(visualizeUrl);
    const [sampleComponent, setSampleComponent] = useState<ReactNode | null>(null)


    useEffect(() => {
        if(vContainer) {
            const lastPartOfUrl = window.location.href;
            let pageName = ""
            if(lastPartOfUrl.endsWith(inputControlsPageStart)){
                pageName = 'inputControls'
            } else if (lastPartOfUrl.endsWith(inputControlsTypesPageStart)){
                pageName = 'inputControlsTypes';
            } else if(lastPartOfUrl.endsWith(schedulerPageStart)){
                pageName = 'scheduler'
            } else if(lastPartOfUrl.endsWith(applicationPageStart)) {
                pageName = 'application'
            }
            setSampleComponent(getLiveSamplePage(pageName, vContainer))
        }

    }, [vContainer])
    return (
        <>
            {
                vContainer ? sampleComponent : <>Loading...</>
            }

        </>
    );
}

export default Main;