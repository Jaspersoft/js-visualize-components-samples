export const advHtmlConfig = {
    renderTable: '<div><span>Scroll down table for <b>infinite scrolling</b>.</span><br><br></div>\n' +
        '<!--Provide container to render your visualization-->\n' +
        '<div id="renderTable">\n' +
        '\t<div class="loader"><p>Loading...</p></div>\n' +
        '</div>',
    customizableWithCSS: '<div>Table customized with <b>CSS styles</b>.</div>\n' +
        '<div id="customizeWithCss">\n' +
        '\t<div class="loader"><p>Loading...</p></div>\n' +
        '</div>',
    crosstabeWithCSS: '<div>Crosstab with <b>CSS styles</b>. Expand to view additional data.</div>\n' +
        '<div id="crosstabWithCss">\n' +
        '\t<div class="loader"><p>Loading...</p></div>\n' +
        '</div>',
    changeVizType: '<div>Select top-left selector to <b>change visualization type</b>.</div>\n' +
        '<div id="chartWithSelectors">\n' +
        '\t<div class="loader"><p>Loading...</p></div>\n' +
        '</div>',
    filteringParameter: '<span>Select country from drop down to apply filter: </span>\n' +
        '<select id="adv-filtering-param" disabled>\n' +
        '    <option value="No Country">No Country</option>\n' +
        '    <option value="USA">USA</option>\n' +
        '    <option value="Mexico">Mexico</option>\n' +
        '     <option  selected="selected" value="Canada">Canada</option>\n' +
        '</select>\n' +
        '<div id="filteringParameter">\n' +
        '\t<div class="loader"><p>Loading...</p></div>\n' +
        '</div>',
    passValue: '<div class="pass-values-selected">Select any item to pass value.</div>\n' +
        '<div id="passValues">\n' +
        '\t<div class="loader"><p>Loading...</p></div>\n' +
        '</div>',
    fieldsAndMeasures: '<div id="fieldsMeasuresFirstField" class="fieldsMeasures selected">Select any data point to pass field and measure</div>   \n' +
        '<div id="fieldsMeasuresSecondField" class="fieldsMeasures selected"></div>\n' +
        '<br>\n' +
        '<div id="measure" class="fieldsMeasures selected"></div>\n' +
        '<div id="fieldsMeasures">><div class="loader"><p>Loading...</p></div></span>\n' +
        '</div>',
    drillDown: '<div>Select data points to <b>drill-down</b> the view over time.</div><br>\n' +
        '<input id="drilldownBackButton" name="goBack" type="button" value="< Back"/>\n' +
        '\n' +
        '<div id="drilldownField" class="selected"></div>\n' +
        '<div id="drilldownMeasure" class="selected"></div>\n' +
        '\n' +
        '<div id="drilldownContainer"><div class="loader"><p>Loading...</p></div></div>\n',
    inNewView: '<div>Select data points to render <b>drill-down</b> details in new view.</div><br>\n' +
        '<div id="firstContainerNewView"><div class="loader"><p>Loading...</p></div></div>\n' +
        '<div id="fieldNewView" class="selected"></div>   \n' +
        '<div id="measureNewView" class="selected"></div>\n' +
        '<div id="secondContainerNewView"></div>'

}