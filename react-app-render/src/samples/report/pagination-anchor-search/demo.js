export const viz = (v) => {

    const report = v.report({
        resource: "/public/Samples/Reports/AllAccounts",
        container: "#navigatingReport",
        pages: {
            anchor: "Newton"
        },
        events: {
            changePagesState: (currentPage) => {
                console.log("changeCurrentPage", currentPage);
            }
        },
        error: (e) => {
            alert(e);
        }
    });
    
    $("#showCurrentLocation").on("click", () => {
        alert(JSON.stringify(report.pages()));
    });
    
    $("#anchor").on("change", (evt) => {
        report
            .pages({ anchor: $(evt.target).val() })
            .run()
            .fail((e) => { console.log(report.pages()); alert(e); });
    });
    
    $("#page").on("change", (evt) => {
        report
            .pages({ pages: $(evt.target).val() })
            .run()
            .fail((e) => { console.log(report.pages()); alert(e); });
    });
    
    $("#range").on("click", () => {
        report.properties({
            pages: {
                pages: "20-30",
                anchor: "Everett"
            }
        }).run().fail((e) => { console.log(report.pages());  alert(e); });
    });
}

