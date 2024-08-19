export const viz=(v)=> {
    v("#dashboardRender").dashboard({
        resource: "/public/Samples/Dashboards/3.1_Sales_Metrics",
        error: (err)=>{
            alert(err.message);
        }
    });
};