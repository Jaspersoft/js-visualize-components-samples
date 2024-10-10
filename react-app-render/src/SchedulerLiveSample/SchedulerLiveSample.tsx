import schedulerUIConfig from "./jv_sheduler_config";
import {
    Scheduler
} from "@jaspersoft/jv-scheduler";

export const SchedulerLiveSample = ({vContainer}: any) => {

    return (
        <Scheduler
            schedulerUIConfig={schedulerUIConfig}
            visualize={vContainer.v}
        />
    )
}