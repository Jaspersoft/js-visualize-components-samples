export const viz = (v) => {
    const accessTypeElement = document.getElementById('accessType'),
        displayError = (err) => {
        alert(err.message);
    },
        renderResults = (results) => {
        accessTypeElement.disabled = false
        const tbody = document.getElementById("ResultsSearchAccessType"),
            html = [];
        let alt = false;

        for (let i = 0; i < results.length; i++) {
            html.push((alt = !alt) ? '<tr>' : '<tr class="alt">');
            html.push("<td>" + results[i].label + "</td>");
            html.push("<td>" + results[i].uri + "</td>");
            html.push("<td>" + results[i].resourceType + "</td>");
            html.push("<td>" + results[i].creationDate + "</td>");
            html.push("</tr>");
        }
        tbody.innerHTML = html.join("");
    },
        search = v.resourcesSearch({
            folderUri: "/public",
            types: ["reportUnit"],
            success: renderResults,
            error: displayError
        });

    accessTypeElement.addEventListener("change", function() {
        const resourceType = accessTypeElement.value;
        accessTypeElement.disabled = true
        search
            .accessType(resourceType)
            .run()
            .done(renderResults);
    });
}