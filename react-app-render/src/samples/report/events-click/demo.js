export const viz = (v) => {
    /* You can customize the appearance of link elements in a generated report in two ways:
    • The linkOptions exposes the beforeRender event to which you can add a listener with access to the
    links in the document as element pairs.
    • The normal click event lets you add a listener that can access to a link when it's clicked */
    v("#reportClickEvent").report({
        resource: "/public/viz/Hyperlinks/Drill_Reports_with_Controls/main_report",
        linkOptions: {
            beforeRender: (linkToElemPairs) => {
                linkToElemPairs.forEach((pair) => {
                    let el = pair.element;
                    el.style.backgroundColor = "red";
                });
            },
            events: {
                "click": (ev, link) => {
                    if (confirm("Change color of link id " + link.id + " to green?")){
                        ev.currentTarget.style.backgroundColor = "green";
                        ev.target.style.color = "#FF0";
                    }
                }
            }
        },
        error:  (err) => {
            alert(err.message);
        }
    });
}
