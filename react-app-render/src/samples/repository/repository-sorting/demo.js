export const viz = (v) => {
    // utility function
    const renderResults = (results) => {
        sortByElement.disabled = false;
        let tbody = document.getElementById("ResultsTableContentForSort"),
            alt = false,
            html = [];

        for (let i = 0; i < results.length; i++) {
            html.push((alt = !alt) ? '<tr>' : '<tr class="alt">');
            html.push("<td>" + results[i].label + "</td>");
            html.push("<td>" + results[i].uri + "</td>");
            html.push("<td>" + results[i].resourceType + "</td>");
            html.push("<td>" + results[i].creationDate + "</td>");
            html.push("</tr>");
        }
        tbody.innerHTML = html.join("");
    }, displayError = (err) => {
        alert(err.message);
    }
    const sortByElement = document.getElementById('sortBy');
    const search = v.resourcesSearch({
        folderUri: "/public",
        types: ["reportUnit"],
        success: renderResults,
        error: displayError
    });

    sortByElement.addEventListener("change", function() {
        let columnName = sortByElement.value;
        sortByElement.disabled = true
        search
            .sortBy(columnName)
            .run()
            .done(renderResults);
    });
}
