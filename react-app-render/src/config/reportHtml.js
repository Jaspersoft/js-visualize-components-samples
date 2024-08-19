export const reportHtmlConfig = {
    renderSimpleReport: '<div id="reportRender"><div class="loader"><p>Loading...</p></div></div>',
    fromAList: '<select id="selected_resource_new_list" disabled="false" name="report">\n' +
        '\t<option value="/public/Samples/Reports/AllAccounts">All Accounts (light)</option>\n' +
        '\t<option value="/public/Samples/Reports/5g.AccountsReport">All Accounts (dark)</option>\n' +
        '\t<option value="/public/Samples/Reports/SalesByMonthReport">Sales By Month Report (light)</option>\n' +
        '\t<option value="/public/Samples/Reports/11g.SalesByMonthReport">Sales By Month Report (dark)</option>\n' +
        '\t<option value="/public/Samples/Reports/ProfitDetailReport">Profit Detail Report (light)</option>\n' +
        '\t<option value="/public/Samples/Reports/06g.ProfitDetailReport">Profit Detail Report (dark)</option>\n' +
        '\t<option value="/public/Samples/Reports/9.CustomerDetailReport">Customer Detail Report (light)</option>\n' +
        '\t<option value="/public/Samples/Reports/9g.CustomerDetailReport">Customer Detail Report (dark)</option>\n' +
        '\t<option value="/public/Samples/Reports/State_Performance">Performance by Store Type (light) </option>\n' +
        '\t<option value="/public/Samples/Reports/10g.PerformanceByStoreType">Performance By Store Type (dark) </option>\n' +
        '\t<option value="/public/Samples/Reports/14.PerformanceSummary">Performance Summary</option>\n' +
        '</select>\n' +
        '<!--Provide container to render your visualization-->\n' +
        '<br><br>\n' +
        '<div id="reportList"><div class="loader"><p>Loading...</p></div></div>',
    loadMultipleReports: '<div style="font-size: 11pt">Scroll down to view additional reports.</div>\n' +
        '<br>\n' +
        '<!--Provide containers to render your visualizations-->\n' +
        '<div id="multipleReports1"><div class="loader"><p>Loading...</p></div></div>\n' +
        '<br/>\n' +
        '<div id="multipleReports2"><div class="loader"><p>Loading...</p></div></div>',
    nextprevious: '<div style="font-size: 11pt">*Note: Use our pagination events example for even greater control of the beginning and end of pagination points.</div>\n' +
        '<br>\n' +
        '<button id="previousPage">Previous Page</button><button id="nextPage">Next Page</button>\n' +
        '<br>\n' +
        '    \n' +
        '<div id="reportNext"><div class="loader"><p>Loading...</p></div></div>',
    enterRange: 'Page range: <input type="text" id="pageRange"/>\n' +
        '<div style="font-size: 8pt">example formats: 3, 6-8</div>\n' +
        '<br>\n' +
        '    \n' +
        '<div id="reportRange"><div class="loader"><p>Loading...</p></div></div>',
    paginationEvents: '<button id="paginationEventPreviousPage" disabled>prev</button>\n' +
        '<input id="paginationEventCurrentPage" value="1" style="width: 30px;"/>\n' +
        '<button id="paginationEventNextPage">next</button>\n' +
        '<br><br>\n' +
        '<div id="reportEvents"><div class="loader"><p>Loading...</p></div></div>',
    anchors: '<div style="font-size: 11pt">Report will load default anchor "Cliffside"</div>\n' +
        '<br><br>\n' +
        'Go to a report anchor: <input type="text" id="anchor"/>\n' +
        '<div style="font-size: 9pt">For example: Bellingham</div>\n' +
        '<br><br>\n' +
        '<div id="pageAnchor"><div class="loader"><p>Loading...</p></div></div>',
    rangeWithAnchors: '<div id="rangeAnchor"></div>',
    anchorsWithSearch: '<div style="font-size: 11pt">Enter page number or range or use predefined values to narrow down search in report.</div>\n' +
        '<div style="font-size: 9pt">Default bookmark: "Newton".</div>\n' +
        '<!--Find bookmark: <input type="text" id="anchor"/>-->\n' +
        'Find page/range: <input type="text" id="page"/>\n' +
        '<br><br>\n' +
        '<div style="font-size: 11pt">Or select from a predefined:</div>\n' +
        '<button id="range">View pages 20-30 with bookmark "Everett"</button>\n' +
        '<button id="showCurrentLocation">Show current location</button>\n' +
        '<br><br>\n' +
        '<div id="navigatingReport"><div class="loader"><p>Loading...</p></div></div>',
    parameterPassing: '<div id="reportParamPass"><div class="loader"><p>Loading...</p></div></div>',
    basicDropDown: '<select id="repo-param">\n' +
        '    <option selected="selected" value="Drink">Drink</option>\n' +
        '    <option value="Food">Food</option>\n' +
        '    <option value="All">All</option>\n' +
        '</select>\n' +
        '<div id="reportDropDown"><div class="loader"><p>Loading...</p></div></div>',
    renderValues: '<select id="productFamilySelector"></select>\n' +
        '<br>\n' +
        '<div id="reportRenderValues"><div class="loader"><p>Loading...</p></div></div>',
    dynamicResourceTypes: '<div id="reportDynamicResource"><div class="loader"><p>Loading...</p></div></div>',
    changeTotalPages: '<div id="changeTotalPages"><div class="loader"><p>Loading...</p></div></div>',
    changePagesState: '<div id="changePageState"><div class="loader"><p>Loading...</p></div></div>',
    reportCompleted: '<div id="reportCompleted"><div class="loader"><p>Loading...</p></div></div>',
    bookmarksReady: '<div>\n' +
        '  <h4>List of Bookmarks</h4>\n' +
        '  <div id="bookmarksContainer"></div>\n' +
        '</div>\n' +
        '<!--Provide container to render your visualization-->\n' +
        '<div id="bookmarkReportcontainer"><div class="loader"><p>Loading...</p></div></div>',
    clickEvent: '<h4>Click on specific city to see change</h4>\n' +
        '<div id="reportClickEvent"><div class="loader"><p>Loading...</p></div></div>',
    tableColumnSort: '<button id="sortAscTable">Sort NAME column ASC</button>\n' +
        '<button id="sortDescTable">Sort NAME column DESC</button>\n' +
        '<button id="sortNoneTable">Resert NAME column</button>\n' +
        '<div id="reportTableSorting"><div class="loader"><p>Loading...</p></div></div>',
    tableColumnCondition: '<div style="font-size: 11pt">Selecting the following will add additional formating to our table.</div>\n' +
        '<div style="font-size: 11pt">In this case we are highlighting every numeric value in the "Unit Sales" column that is greater than 3.</div>\n' +
        '<button id="changeTableConditions">Change conditions for numeric column</button>\n' +
        '\n' +
        '<div id="reportTableFormatting"><div class="loader"><p>Loading...</p></div></div>',
    crosstabColumnSort: '<button id="sortAscCol">Sort 2nd column ASC</button>\n' +
        '<button id="sortDescCol">Sort 2nd column DESC</button>\n' +
        '<button id="sortNoneCol">Sort 2nd column NONE</button>\n' +
        '<div id="crosstabColSorting"><div class="loader"><p>Loading...</p></div></div>',
    crosstabRowSort: '<button id="sortAscRow">Sort rows ASC</button>\n' +
        '<button id="sortDescRow">Sort rows DESC</button>\n' +
        '<button id="sortNoneRow">Sort rows NONE</button>\n' +
        '<div id="crosstabRowSorting"><div class="loader"><p>Loading...</p></div></div>\n'+
        '<div id="reportRender"><div class="loader"><p>Loading...</p></div></div>',
    saveReport:'<select id="save-selected_resource" disabled="true" name="report">\n' +
        '   <option value="/public/Samples/Reports/01._Geographic_Results_by_Segment_Report">1._Geographic_Results_by_Segment_Report</option>\n' +
        '   <option value="/public/Samples/Reports/02._Sales_Mix_by_Demographic_Report">2_Sales_Mix_by_Demographic_Report</option>\n' +
        '   <option value="/public/Samples/Reports/3_Store_Segment_Performance_Report">3_Store_Segment_Performance_Report</option>\n' +
        '   <option value="/public/Samples/Reports/04._Product_Results_by_Store_Type_Report">04._Product_Results_by_Store_Type_Report</option>\n' +
        '   <option value="/public/Samples/Reports/AllAccounts">AllAccounts</option>\n' +
        '   <option value="/public/Samples/Reports/5g.AccountsReport">5g.AccountsReport</option>\n' +
        '   <option value="/public/Samples/Reports/06g.ProfitDetailReport">06g.ProfitDetailReport</option>\n' +
        '   <option value="/public/Samples/Reports/RevenueDetailReport">RevenueDetailReport</option>\n' +
        '   <option value="/public/Samples/Reports/08g.UnitSalesDetailReport">08g.UnitSalesDetailReport</option>\n' +
        '   <option value="/public/Samples/Reports/08.UnitSalesDetailReport">08.UnitSalesDetailReport</option>\n' +
        '   <option value="/public/Samples/Reports/9.CustomerDetailReport">9.CustomerDetailReport</option>\n' +
        '   <option value="/public/Samples/Reports/9g.CustomerDetailReport">9g.CustomerDetailReport</option>\n' +
        '   <option value="/public/Samples/Reports/10g.PerformanceByStoreType">10g.PerformanceByStoreType</option>\n' +
        '   <option value="/public/Samples/Reports/State_Performance">State_Performance</option>\n' +
        '   <option value="/public/Samples/Reports/11g.SalesByMonthReport">11g.SalesByMonthReport</option>\n' +
        '   <option value="/public/Samples/Reports/SalesByMonthReport">SalesByMonthReport</option>\n' +
        '   <option value="/public/Samples/Reports/12g.PromotionDetailsReport">/public/Samples/Reports/12g.PromotionDetailsReport</option>\n' +
        '   <option value="/public/Samples/Reports/PromotionDetailsReport">PromotionDetailsReport</option>\n' +
        '   <option value="/public/Samples/Reports/13g.TopFivesReport">13g.TopFivesReport</option>\n' +
        '   <option value="/public/Samples/Reports/14.PerformanceSummary">14.PerformanceSummary (including fusion chart)</option>\n' +
        '</select>\n' +
        '<button id="saveReport" disabled="disabled">Save</button><br><br>\n' +
        '<div>Folder URI<input id="saveReportfolder" type="text" disabled="disabled"/></div>\n' +
        '<div>Label<input id="saveReportLabel" type="text" disabled="disabled"/></div>\n' +
        '<div>Description<input id="saveReportDescription" type="text" disabled="disabled"/></div>\n' +
        '<div>Overwrite<input id="saveReportOverwrite" type="checkbox" disabled="disabled"/></div>\n' +
        '<!--Provide container to render your visualization-->\n' +
        '<div id="reportSave"><div class="loader"><p>Loading...</p></div></div>',

    exportFormats:'<button id="repoExportbutton" disabled>Export</button>\n' +
        '<!--Provide container to render your visualization-->\n' +
        '<div id="reportExport"><div class="loader"><p>Loading...</p></div></div>',
    autoExportReport:'<div id="reportAutoExport"><h4>PDF will automatically export for specified report.</h4><span class="loader"></span></div>'
        ,
    CSVRenderReport:' <div id="reportCsvExport"><div id="loader"><h3>Loading...</h3></div></div>',
    JSONRenderReport:'<div id="jsonExport"></div><!--Show a loading indicator during render-->\n' +
        '<div id="exportLoader"><h3>Loading report data...</h3></div>\n' +
        '<div id="build" style="display:none"><h3>Building visualization...</h3></div>'
}