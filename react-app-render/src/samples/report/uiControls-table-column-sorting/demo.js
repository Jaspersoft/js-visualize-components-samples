export const viz = (v) => {
    const showError = (err) => {
        alert(err);
    }
    const report = v.report({
        resource: "/public/Samples/Reports/5g.AccountsReport",
        container: "#reportTableSorting",
        error: showError
    });

    $("#sortAscTable").on("click", () => {
        report.updateComponent("name", {
            sort: {
                order: "asc"
            }
        })
        .fail(showError);
    });

    $("#sortDescTable").on("click", () => {
        report.updateComponent("name", {
            sort: {
                order: "desc"
            }
        })
        .fail(showError);
    });

    $("#sortNoneTable").on("click", () => {
        report.updateComponent("name", {
            sort: {}
        }).fail(showError);
    });
}