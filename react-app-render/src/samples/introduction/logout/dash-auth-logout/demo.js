// Visualize: Login and logout/destroy session with dashboards

export const viz=(v)=> {
    const dashboard = v.dashboard({
        resource: "/public/Samples/Dashboards/4._New_Dashboard",
        container: "#dashboardAuth",
        error: (e) =>{
            alert(e);
        }
    });

    document.getElementById("dashbordDestroyedButton").addEventListener("click", () => {
        dashboard
            .destroy()
            .fail((e) => {
                alert(e);
            })
            .done(()=> {
                console.log("dashboard destroyed");
            });
    })
};
