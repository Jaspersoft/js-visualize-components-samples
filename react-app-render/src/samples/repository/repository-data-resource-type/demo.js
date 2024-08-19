export const viz = (v) => {
    const displayError = (err) => {
        alert(err.message);
    }
    // utility function
    const renderResults = (results) => {
        resourceTypeElement.disabled = false;
        let tbody = document.getElementById("ResultsTableContentResourceType"),
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
    }
    const resourceTypeElement = document.getElementById('dataResourceType');
    const search = v.resourcesSearch({
        folderUri: "/public",
        types: ["reportUnit"],
        success: renderResults,
        error: displayError
    });

    resourceTypeElement
        .addEventListener("change", function() {
            resourceTypeElement.disabled = true;
            const resourceType = resourceTypeElement.value;
            search
                .types([resourceType])
                .run()
                .done(renderResults);
        });
}
