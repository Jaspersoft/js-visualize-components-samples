export const viz = (v) => {
    const reportUri = "/public/Samples/Reports/Cascading_Report_2_Updated",
        renderInputControls = (data) => {
        var productFamilyInputControl = _.findWhere(data, {
            id: "Product_Family"
        });
        var select = $("#productFamilySelector");
        _.each(productFamilyInputControl.state.options, function (option) {
            select.append("<option " + (option.selected ? "selected" : "") + " value='" + option.value + "'>" + option.label + "</option>");
        });
    }

    v.inputControls({
        resource: reportUri,
        success: renderInputControls
    });

    var report = v.report({
        resource: reportUri,
        container: "#reportRenderValues"
    });

    $("#productFamilySelector").on("change",  (evt) => {
        report.params({
            "Product_Family": [$(evt.target).val()]
        }).run();
    });
}
