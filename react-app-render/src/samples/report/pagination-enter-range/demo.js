export const viz = (v) => {
    const report = v.report({
        resource: "/public/Samples/Reports/AllAccounts",
        container: "#reportRange"
    });
    
    $("#pageRange").change((evt) => {
        report
            .pages($(evt.target).val())
            .run()
                .fail((err) => { alert(err); });
    });
}
