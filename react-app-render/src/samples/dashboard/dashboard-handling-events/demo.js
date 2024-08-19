export const viz=(v)=> {
    const $tooltip = $("<div></div>").css({
        "position": "absolute",
        "height": "25px",
        "background-color": "grey",
        "border": "1px solid black",
        "color": "white",
        "display": "none"
    });
    const showCursor=(pair)=>{
        const el = pair.element;
        el.style.cursor = "pointer";
    }
    $("body").append($tooltip);
    
    v("#dashboardEventHandlingmain").dashboard({
        resource: "/public/Samples/Dashboards/1._Supermart_Dashboard",
        linkOptions: {
            beforeRender:  (linkToElemPairs)=> {
                linkToElemPairs.forEach(showCursor);
            },
            events: {
                "mouseover": (event, link)=> {
                    $tooltip.css({
                        top: "42px",
                        left: $(event.target).position().left
                    }).text(link.tooltip).show();
                },
                "mouseout": ()=> {
                    $tooltip.hide();
                },
                "click": (ev, link)=>{
                    if (link.type === "ReportExecution") {
                        const params = {};

                        for (const key in link.parameters) {
                            if (key !== "_report") {
                                params[key] = Object.prototype.toString.call(link.parameters[key]) !== "[object Array]"
                                    ? [link.parameters[key]]
                                    : link.parameters[key];
                            }
                        }
                        
                        v("#dashboard-drill-down").report({
                            resource: link.parameters._report,
                            params: params
                        });     
                    }
                }
            }    
        },
        error:  (err)=> {
            alert(err.message);
        }
    });
};