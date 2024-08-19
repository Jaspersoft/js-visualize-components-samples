export const viz = (v) => {
    const report = v.report({
        resource: "/public/Samples/Reports/AllAccounts",
        container: "#reportNext"
    });
    
    $("#previousPage").click(() => {
        var currentPage = report.pages() || 1;
        
        report
            .pages(--currentPage)
            .run()
                .fail((err) => { alert(err); });
    });
    
    $("#nextPage").click(() => {
        let currentPage = report.pages() || 1;
        
        report
            .pages(++currentPage)
            .run()
                .fail((err) => { alert(err); });
    });
}
