export const viz = (v) => {
    const report = v.report({
        resource: "/public/Samples/Reports/5g.AccountsReport",
        success: () => {
            report.export({
                outputFormat: "pdf",
                pages: {
                    anchor: "Newton"
                }
            }, (link) => {
                const url = link.href ? link.href : link;
                window.location.href = url;
            }, (error) => {
                console.log(error);
            });
        }
    });
};