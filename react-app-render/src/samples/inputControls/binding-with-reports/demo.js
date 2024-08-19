export const viz= (v)=> {

    const resourceUri = "/public/Samples/Reports/Cascading_Report_2_Updated";

    const report = v.report({
        resource: resourceUri,
        container: "#report",
        events: {
            reportCompleted: () => {
                document.getElementById('inputBindWithReport').getElementsByClassName('loader')[0].style.display = "none"
                document.getElementById("ic").style.display = "none";
            }
        },
    });

    v.inputControls({
        resource: resourceUri,
        container: "#ic",
        events: {
            change: (params, error) => {
                if (!error) {
                    report.params(params).run();
                }
            }
        }
    });
};
