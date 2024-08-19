export const viz = (v) => {
    v.report({
        resource: "/public/Samples/Reports/01._Geographic_Results_by_Segment_Report",
        container: "#reportCompleted",
        events: {
            reportCompleted: (status) => {
                alert("Report status: "+ status+ "!");
            }
        },
    });
}
