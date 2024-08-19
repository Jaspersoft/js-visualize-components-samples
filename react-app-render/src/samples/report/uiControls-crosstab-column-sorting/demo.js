export const viz = (v) => {
    const sortASCBtn = document.getElementById('sortAscCol'),
        sortDSCBtn = document.getElementById('sortDescCol'),
        sortNONEBtn= document.getElementById('sortNoneCol')

    sortASCBtn.disabled = true
    sortDSCBtn.disabled = true
    sortNONEBtn.disabled = true
    let column2,
    report = v.report({
        resource: "/public/viz/crosstab",
        container: "#crosstabColSorting",
        events: {
            reportCompleted: (status) => {
                if (status === "ready") {
                    let columns = _.filter(report.data().components, (component) => {
                        return component.componentType === "crosstabDataColumn";
                    });

                    column2 = columns[1];
                    console.log(columns);
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

    $("#sortAscCol").on("click", () => {
        report.updateComponent(column2.id, {
            sort: {
                order: "asc"
            }
        }).fail((e) => {
            alert(e);
        });
    });

    $("#sortDescCol").on("click", () => {
        report.updateComponent(column2.id, {
            sort: {
                order: "desc"
            }
        }).fail((e) => {
            alert(e);
        });
    });

    $("#sortNoneCol").on("click", () => {
        report.updateComponent(column2.id, {
            sort: {}
        }).fail((e) => {
            alert(e);
        });
    });
}