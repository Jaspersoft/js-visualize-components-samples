export const viz = (v) => {
    v.report({
        resource: "/public/Samples/Reports/17._Report_Workbook",
        container: "#rangeAnchor",
        pages: {
            pages: "26-31",
            anchor: "Newton"
        },
        error: (e) => {
            alert(e);
        }
    });
}