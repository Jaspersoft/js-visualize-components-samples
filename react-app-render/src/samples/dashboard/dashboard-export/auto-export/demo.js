export const viz= (v)=> {
    const dashboard = v.dashboard({
        resource: "/public/Samples/Dashboards/New_Dashboard",
        success:  () => {
            dashboard.export({
                outputFormat: "pdf"
            },  (link) =>{
                const url = link.href ? link.href : link;
                window.location.href = url;
            },  (error)=> {
                console.log(error);
            });
        }
    });
};