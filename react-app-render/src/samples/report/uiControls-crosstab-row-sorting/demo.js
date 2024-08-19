export const viz = (v) => {
    const sortASCBtn = document.getElementById('sortAscCol'),
        sortDSCBtn = document.getElementById('sortDescCol'),
        sortNONEBtn= document.getElementById('sortNoneCol')

    sortASCBtn.disabled = true
    sortDSCBtn.disabled = true
    sortNONEBtn.disabled = true
    let row,
    report = v.report({
        resource: "/public/viz/crosstab",
        container: "#crosstabRowSorting",
        events: {
            reportCompleted: (status) => {
                if (status === "ready") {
                    row = _.filter(report.data().components, (component) => {
                        return component.componentType === "crosstabRowGroup";
                    })[0];
                }
            }
        },
        error: (err) => {
            alert(err);
        },
        success: () => {
            sortASCBtn.disabled = false
            sortDSCBtn.disabled = false
            sortNONEBtn.disabled = false
        }
    });

    $("#sortAscRow").on("click",  () => {
        report.updateComponent(row.id, {
            sort: {
                order: "asc"
            }
        }).fail((e) => {
            alert(e);
        });
    });

    $("#sortDescRow").on("click", () => {
        report.updateComponent(row.id, {
            sort: {
                order: "desc"
            }
        }).fail((e) => {
            alert(e);
        });
    });

    $("#sortNoneRow").on("click", () => {
        report.updateComponent(row.id, {
            sort: {}
        }).fail(function (e) {
            alert(e);
        });
    });
}