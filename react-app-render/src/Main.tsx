import useVisualize from "./visualize/useVisualize";
import {useEffect, useState} from "react";
import {inputControlsPageStart, schedulerPageStart} from "./constants/liveSamplesConstants";
import InputControlsLiveSample from "./InputControlsLiveSample/InputControlsLiveSample";
import {SchedulerLiveSample} from "./SchedulerLiveSample/SchedulerLiveSample";

const visualizeUrl = "https://mobiledemo.jaspersoft.com/jasperserver-pro/client/visualize.js";

const getLiveSamplePage = (pageName: string, vContainer: any) => {
    switch (pageName){
        case 'inputControls':
            return <InputControlsLiveSample vContainer={vContainer}/>
        case 'scheduler':
                return <SchedulerLiveSample vContainer={vContainer}/>
        default:
            return <></>

    }
}

const Main = () => {
    const vContainer = useVisualize(visualizeUrl);
    const [sampleComponent, setSampleComponent] = useState<React.ReactNode | null>(null)


    useEffect(() => {
        if(vContainer) {
            const lastPartOfUrl = window.location.href;
            let pageName = ""
            if(lastPartOfUrl.endsWith(inputControlsPageStart)){
                pageName = 'inputControls'
            } else if(lastPartOfUrl.endsWith(schedulerPageStart)){
                pageName = 'scheduler'
            }
            setSampleComponent(getLiveSamplePage(pageName, vContainer))
        }

    }, [vContainer])
    return (
        <div className="paper">
            {
                vContainer ? sampleComponent : <></>
            }

        </div>
    );
}

export default Main;