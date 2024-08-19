export const dashboardHtmlConfig = {
    renderTable: '<!--Provide container to render your visualization-->\n' +
        '<div id="dashboardRender">\n' +
        '   <div class="loader"><p>Loading...</p></div>\n' +
        '</div>',
    filterData: '\n' +
        '<div class="dashboardApplyInputFields"></div>\n' +
        '<button class="dashboardApplyParams" disabled>Apply params</button>\n' +
        '<div id="dashboardParam">\n' +
        '   <div class="loader">\n' +
        '       <p>Loading...</p>\n' +
        '   </div>\n' +
        '</div>',
    undoRedoData:'<table id="dash-filter-params">\n' +
        '   <tr>\n' +
        '       <td>Parameter ID</td>\n' +
        '       <td>Set value</td>\n' +
        '   </tr>\n' +
        '</table>\n' +
        '\n' +
        '<br/>\n' +
        '<button id="dash-filter-apply" disabled>Apply params</button>\n' +
        '<button id="dash-filter-undo" disabled>Undo</button>\n' +
        '<button id="dash-filter-undoAll" disabled>Undo All</button>\n' +
        '<button id="dash-filter-redo" disabled>Redo</button>\n' +
        '<br/>\n' +
        '<br/>\n' +
        '\n' +
        '<div id="dashboardUndo">\n' +
        '   <div class="loader"><p>Loading...</p></div>\n' +
        '</div>',
    handlingEvent:'<h5>Select from "Top Fives" report dashlet to render an additional drilldown dashboard under the original.</h5>\n' +
        '\n' +
        '<div>\n' +
        '   <div id="dashboardEventHandlingmain">\n' +
        '       <div class="loader"><p>Loading...</p>\n' +
        '   </div>\n' +
        '</div>\n' +
        '<div id="dashboard-drill-down"></div>\n' +
        '</div>',
    exportFormat:'<button id="dash-export-button" disabled>Export</button>\n' +
        '<!--Provide container to render your visualization-->\n' +
        '<div id="dashboardExport">\n' +
        '   <div class="loader"><p>Loading...</p></div>\n' +
        '</div>',
    autoExport:'<h4>PDF will automatically export for specified report.</h4>\n'+
        '<div id="dashboardAutoExport">\n' +
        '     <span class="loader"><span/>\n' +
        '</div>'

}
