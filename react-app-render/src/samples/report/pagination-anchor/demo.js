export const viz = (v) => {

    const report = v.report({
        resource: "/public/Samples/Reports/17._Report_Workbook",
        container: "#pageAnchor",
        pages: {
            anchor: "Cliffside"
        },
        error: (e) => {
            alert(e);
        }
    });
    
    $("#anchor").on("change", (evt) => {
        report
            .pages({ anchor: $(evt.target).val() })
            .run()
            .fail((e) => { alert(e); });
    });
}
