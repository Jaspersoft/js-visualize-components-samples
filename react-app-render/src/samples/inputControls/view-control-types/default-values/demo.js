export const viz=(v)=> {
    v.inputControls({
        resource: "/public/viz/Adhoc/Ad_Hoc_View_filters_with_default_Report",
        container: "#containerInputDefault",
        error:  (err) => {
            console.error(err);
        }
    });
};