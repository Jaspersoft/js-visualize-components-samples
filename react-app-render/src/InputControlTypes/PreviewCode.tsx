import {renderInputControls} from "@jaspersoft/jv-input-controls";
import {useEffect} from "react";

const PreviewCode = ({uri, refId, vContainer}: { uri: string, refId: string, vContainer: any }) => {
    useEffect(() => {
        if (vContainer?.v) {
            renderInputControls(
                vContainer.v,
                uri,
                document.getElementById(refId) as HTMLElement,
                {
                    success: () => {
                        console.log("Input controls rendered successfully");
                    },
                    error: (error) => {
                        console.log("Error rendering input controls: ", error);
                    },
                    events: {
                        change: (ics, validationResult) => {
                            console.log("validationResult => ", validationResult);
                            console.log("ics => ", ics);
                        },
                    },
                },
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