export const viz=(v)=> {
    v.inputControls({
        container: "#inputWithCascade",
        resource: "/public/viz/InputControl/Cascading_Report_2_Updated",
        error: (err) => {
            alert(err);
        },
        events: {
            change : (params)=> {
                console.log(params);
            }
        }
    });
};