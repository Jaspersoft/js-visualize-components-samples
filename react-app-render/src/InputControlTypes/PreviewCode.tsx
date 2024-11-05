import {renderInputControls} from "@jaspersoft/jv-input-controls";
import {useEffect} from "react";
import {CommonParamsForInputControl} from "../constants/codeForInputControlTypes.ts";

const PreviewCode = ({uri, refId, vContainer, config}: {
    uri: string,
    refId: string,
    vContainer: any,
    config?: CommonParamsForInputControl
}) => {

    const finalConfig: any = {
        success: () => {
            console.log("Input controls rendered successfully");
        },
        error: (error: any) => {
            console.log("Error rendering input controls: ", error);
        },
        events: {
            change: (ics: any[], validationResult: any[] | boolean) => {
                console.log("validationResult => ", validationResult);
                console.log("ics => ", ics);
            },
        },
    };
    if (config?.typeConfig) {
        finalConfig.typeConfig = config.typeConfig;
    }
    if (config?.params) {
        finalConfig.params = config.params;
    }
    if (config?.success) {
        finalConfig.success = config.success;
    }
    if (config?.error) {
        finalConfig.error = config.error;
    }
    if (config?.events) {
        finalConfig.events = config.events;
    }

    useEffect(() => {
        if (vContainer?.v) {
            renderInputControls(
                vContainer.v,
                uri,
                document.getElementById(refId) as HTMLElement,
                finalConfig
            );
        }

    }, [vContainer]);
    return (
        <>
            {vContainer?.v && <div id="controls-demo-page">
                <div className="jv-lColumns">
                    <div className="jv-lColumns-column jr-uWidth-300px">
                        <div className="jv-mPanel mui">
                            <div className="jv-mPanel-header jv-uPadding-lr-04 mui">
                                <h4 className="jr-mText jr-mPanel-header-title mui">
                                    Filter Report
                                </h4>
                            </div>

                            <div className="jv-mPanel-body jv-uPadding-04 mui">
                                <div id={refId}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
            {!vContainer?.v && <div>Loading...</div>}
        </>
    );
};

export default PreviewCode;