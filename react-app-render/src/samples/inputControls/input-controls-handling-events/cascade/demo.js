export const viz=(v)=> {
    v.inputControls({
        container: "#cascadeContainer",
        resource: "/public/viz/InputControl/Cascading_Report_2_Updated",
        error: (err) => {
            alert(err);
        },
        events: {
            change : (params) => {
                console.log(params);
            }
        }
    });
};