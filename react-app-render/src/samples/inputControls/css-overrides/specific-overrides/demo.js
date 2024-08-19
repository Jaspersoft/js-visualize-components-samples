export const viz = (v) => {
    v.inputControls({
        resource: "/public/viz/Adhoc/Ad_Hoc_View_All_filters_Report",
        container: "#specificOverridesContainer",
        error: (err) => {
            console.error(err);
        }
    });
};