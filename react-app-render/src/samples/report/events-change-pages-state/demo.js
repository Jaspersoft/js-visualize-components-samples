export const viz = (v) => {
   v.report({
        //provide report with many pages in
        resource: "/public/Samples/Reports/RevenueDetailReport",
        container: "#changePageState",
        events: {
            reportCompleted: (status) => {
                alert("Report status: "+ status+ "!");
            }
        },
        error: (error) => {
            alert(error);
        },
    });
}