import { reportHtmlConfig } from './reportHtml'
import { viz as repBasicEmbedReportRenderViz} from '../samples/report/basicEmbed-simple-report-rendering/demo'
import repReportRenderStyles from '../samples/report/basicEmbed-simple-report-rendering/demo.css'
import { viz as repBasicEmbedFromAlistViz, vizerror as repBasicEmbedFromAlistVizError } from '../samples/report/basicEmbed-from-a-list/demo'
import repBasicEmbedFromAlistStyles from '../samples/report/basicEmbed-from-a-list/demo.css'
import { viz1 as repBasicEmbedLoadMultipleViewViz1, viz2 as repBasicEmbedLoadMultipleViewViz2 } from '../samples/report/basicEmbed-load-multiple-reports/demo'
import repBasicEmbedLoadMultipleViewStyles from '../samples/report/basicEmbed-load-multiple-reports/demo.css'
import { viz as repPaginationNextPreviousViz } from '../samples/report/pagination-next-previous/demo'
import repPaginationNextPreviousStyles from '../samples/report/pagination-next-previous/demo.css'
import { viz as repPaginationEnterRangeViz } from '../samples/report/pagination-enter-range/demo'
import repPaginationEnterRangeStyles from '../samples/report/pagination-enter-range/demo.css'
import { viz as repPaginationEventsViz } from '../samples/report/pagination-events/demo'
import repPaginationEventsStyles from '../samples/report/pagination-events/demo.css'
import { viz as repPaginationAnchorViz } from '../samples/report/pagination-anchor/demo'
import repPaginationAnchorStyles from '../samples/report/pagination-anchor/demo.css'
import { viz as repPaginationRangeWithAnchorViz } from '../samples/report/pagination-range-with-anchor/demo'
import repPaginationRangeWithAnchorStyles from '../samples/report/pagination-range-with-anchor/demo.css'
import { viz as repPaginationAnchorSearchViz } from '../samples/report/pagination-anchor-search/demo'
import repPaginationAnchorSearchStyles from '../samples/report/pagination-anchor-search/demo.css'
import { viz as repFilteringParameterPassViz } from '../samples/report/filterinData-parameter-passing/demo'
import repFilteringParameterPassStyles from '../samples/report/filterinData-parameter-passing/demo.css'
import { viz as repFilteringBasicDropdownViz } from '../samples/report/filteringData-basic-drop-down/demo'
import repFilteringBasicDropdownStyles from '../samples/report/filteringData-basic-drop-down/demo.css'
import { viz as repFilteringRenderValuesViz } from '../samples/report/filteringData-render-values/demo'
import repFilteringRenderValuesStyles from '../samples/report/filteringData-render-values/demo.css'
import { viz as repEventsChangeTotalPageViz } from '../samples/report/events-change-total-page/demo'
import repEventsChangeTotalPageStyles from '../samples/report/events-change-total-page/demo.css'
import { viz as repEventsChangePageStateViz } from '../samples/report/events-change-pages-state/demo'
import repEventsChangePageStateStyles from '../samples/report/events-change-pages-state/demo.css'
import { viz as repEventsReportCompletedViz } from '../samples/report/events-reportCompleted/demo'
import repEventsReportCompletedStyles from '../samples/report/events-reportCompleted/demo.css'
import { viz as repEventsBookmarksreadyViz } from '../samples/report/events-bookmarksReady/demo'
import repEventsBookmarksReadyStyles from '../samples/report/events-bookmarksReady/demo.css'
import { viz as repEventsClickViz } from '../samples/report/events-click/demo'
import repEventsClickStyles from '../samples/report/events-click/demo.css'
import { viz as repUiControlsTableColumnSortViz } from '../samples/report/uiControls-table-column-sorting/demo'
import repUiControlsTableColumnSortStyles from '../samples/report/uiControls-table-column-sorting/demo.css'
import { viz as repUiControlsTableColumnConditionalFormViz } from '../samples/report/uiControls-table-conditional-formatting/demo'
import repUiControlsTableColumnConditionalFormStyles from '../samples/report/uiControls-table-conditional-formatting/demo.css'
import { viz as repUiControlsCrosstabColumnSortViz } from '../samples/report/uiControls-crosstab-column-sorting/demo'
import repUiControlsCrosstabColumnSortStyles from '../samples/report/uiControls-crosstab-column-sorting/demo.css'
import { viz as repUiControlsCrosstabRowSortViz } from '../samples/report/uiControls-crosstab-row-sorting/demo'
import repUiControlsCrosstabRowSortStyles from '../samples/report/uiControls-crosstab-row-sorting/demo.css'
import { viz as repFilteringDynamicResourceViz } from '../samples/report/filteringdata-dynamic-resource-types/demo'
import repFilteringDynamicResourceStyles from '../samples/report/filteringdata-dynamic-resource-types/demo.css'
import { viz as repSaveViz } from '../samples/report/save-report/demo';
import repSaveStyles from '../samples/report/save-report/demo.css';
import { viz as repAutoExportViz} from '../samples/report/export-auto/demo';
import repAutoExportStyles from '../samples/report/export-auto/demo.css';
import { viz as repFormatsExportViz} from  '../samples/report/export-formats/demo';
import repFormatsExportStyles from  '../samples/report/export-formats/demo.css';
import { viz as repCSVRenderViz} from '../samples/report/export-csv-render/demo';
import repCSVRenderStyles from '../samples/report/export-csv-render/demo.css';
import { viz as repJSONRenderViz} from '../samples/report/export-json-render/demo';
import repJSONRenderStyles from '../samples/report/export-json-render/demo.css';
import { convertToString , authString} from '../utils/common.utils'
import {underscoreLibrary, jqueryLibrary, d3Library, dimpleLibrary} from '../samplesConstants'

export const reportConfig = [
    {
        id: 'rep-renderSimpleReport-container',
        jsContent: `visualize(${authString} ${convertToString(repBasicEmbedReportRenderViz)})`,
        cssContent: `${repReportRenderStyles}`,
        htmlContent: reportHtmlConfig.renderSimpleReport,
        containerId: 'reportRender',
        onPreviewClick: () => visualize(repBasicEmbedReportRenderViz)
    },
    {
        id: "rep-fromAList-container",
        jsContent: `visualize(${authString} ${convertToString(repBasicEmbedFromAlistViz)}, ${convertToString(repBasicEmbedFromAlistVizError)} )`,
        cssContent: `${repBasicEmbedFromAlistStyles}`,
        htmlContent: reportHtmlConfig.fromAList,
        onPreviewClick: () => { visualize(repBasicEmbedFromAlistViz, repBasicEmbedFromAlistVizError)},
        containerId: 'reportList',
        extraLibrary: [jqueryLibrary]
    },
    {
        id: "rep-loadMultipleReports-container",
        jsContent: `visualize.config(${authString}) \n visualize(${convertToString(repBasicEmbedLoadMultipleViewViz1)} \n  ${convertToString(repBasicEmbedLoadMultipleViewViz2)})`,
        cssContent: `${repBasicEmbedLoadMultipleViewStyles}`,
        htmlContent: reportHtmlConfig.loadMultipleReports,
        containerId: 'multipleReports1',
        onPreviewClick: () => { visualize(repBasicEmbedLoadMultipleViewViz1); visualize(repBasicEmbedLoadMultipleViewViz2)}
    },
    {
        id: "rep-paginationNextPrevious-container",
        jsContent: `visualize(${authString} ${convertToString(repPaginationNextPreviousViz)})`,
        cssContent: `${repPaginationNextPreviousStyles}`,
        htmlContent: reportHtmlConfig.nextprevious,
        onPreviewClick: () => { visualize(repPaginationNextPreviousViz);},
        containerId: 'reportNext',
        extraLibrary: [jqueryLibrary]
    },
    {
        id: "rep-paginationEnterRange-container",
        jsContent: `visualize(${authString} ${convertToString(repPaginationEnterRangeViz)})`,
        cssContent: `${repPaginationEnterRangeStyles}`,
        htmlContent: reportHtmlConfig.enterRange,
        onPreviewClick: () => { visualize(repPaginationEnterRangeViz)},
        containerId: 'reportRange',
        extraLibrary: [jqueryLibrary]
    },
    {
        id: "rep-paginationEvents-container",
        jsContent: `visualize(${authString} ${convertToString(repPaginationEventsViz)})`,
        cssContent: `${repPaginationEventsStyles}`,
        htmlContent: reportHtmlConfig.paginationEvents,
        onPreviewClick: () => { visualize(repPaginationEventsViz);},
        containerId: 'reportEvents',
        extraLibrary: [jqueryLibrary]
    },
    {
        id: "rep-paginationAnchors-container",
        jsContent: `visualize(${authString} ${convertToString(repPaginationAnchorViz)})`,
        cssContent: `${repPaginationAnchorStyles}`,
        htmlContent: reportHtmlConfig.anchors,
        onPreviewClick: () => { visualize(repPaginationAnchorViz);},
        containerId: 'pageAnchor',
        extraLibrary: [jqueryLibrary]
    },
    {
        id: "rep-paginationRangeWithAnchor-container",
        jsContent: `visualize(${authString} ${convertToString(repPaginationRangeWithAnchorViz)})`,
        cssContent: `${repPaginationRangeWithAnchorStyles}`,
        htmlContent: reportHtmlConfig.rangeWithAnchors,
        containerId: 'rangeAnchor',
        onPreviewClick: () => { visualize(repPaginationRangeWithAnchorViz);}
    },
    {
        id: "rep-paginationAnchorPageSearch-container",
        jsContent: `visualize(${authString} ${convertToString(repPaginationAnchorSearchViz)})`,
        cssContent: `${repPaginationAnchorSearchStyles}`,
        htmlContent: reportHtmlConfig.anchorsWithSearch,
        onPreviewClick: () => { visualize(repPaginationAnchorSearchViz);},
        containerId: 'navigatingReport',
        extraLibrary: [jqueryLibrary]
    },
    {
        id: "rep-filteringParameterPassing-container",
        jsContent: `visualize(${authString} ${convertToString(repFilteringParameterPassViz)})`,
        cssContent: `${repFilteringParameterPassStyles}`,
        htmlContent: reportHtmlConfig.parameterPassing,
        containerId: 'reportParamPass',
        onPreviewClick: () => { visualize(repFilteringParameterPassViz);}
    },
    {
        id: "rep-filteringBasicDropDown-container",
        jsContent: `visualize(${authString} ${convertToString(repFilteringBasicDropdownViz)})`,
        cssContent: `${repFilteringBasicDropdownStyles}`,
        htmlContent: reportHtmlConfig.basicDropDown,
        onPreviewClick: () => { visualize(repFilteringBasicDropdownViz);},
        containerId: 'reportDropDown',
        extraLibrary: [jqueryLibrary]
    },
    {
        id: "rep-filteringRenderValues-container",
        jsContent: `visualize(${authString} ${convertToString(repFilteringRenderValuesViz)})`,
        cssContent: `${repFilteringRenderValuesStyles}`,
        htmlContent: reportHtmlConfig.renderValues,
        onPreviewClick: () => { visualize(repFilteringRenderValuesViz);},
        containerId: 'reportRenderValues',
        extraLibrary: [jqueryLibrary, underscoreLibrary]
    },
    {
        id: "rep-filteringDynamicResource-container",
        jsContent: `visualize(${authString} ${convertToString(repFilteringDynamicResourceViz)})`,
        cssContent: `${repFilteringDynamicResourceStyles}`,
        htmlContent: reportHtmlConfig.dynamicResourceTypes,
        onPreviewClick: () => { visualize(repFilteringDynamicResourceViz);},
        containerId: 'reportDynamicResource',
        extraLibrary: [jqueryLibrary]
    },
    {
        id: "rep-eventsChangeTotalPage-container",
        jsContent: `visualize(${authString} ${convertToString(repEventsChangeTotalPageViz)})`,
        cssContent: `${repEventsChangeTotalPageStyles}`,
        htmlContent: reportHtmlConfig.changeTotalPages,
        containerId: 'changeTotalPages',
        onPreviewClick: () => { visualize(repEventsChangeTotalPageViz);}
    },
    {
        id: "rep-eventsChangePageState-container",
        jsContent: `visualize(${authString} ${convertToString(repEventsChangePageStateViz)})`,
        cssContent: `${repEventsChangePageStateStyles}`,
        htmlContent: reportHtmlConfig.changePagesState,
        containerId: 'changePageState',
        onPreviewClick: () => { visualize(repEventsChangePageStateViz);}
    },
    {
        id: "rep-eventsReportCompleted-container",
        jsContent: `visualize(${authString} ${convertToString(repEventsReportCompletedViz)})`,
        cssContent: `${repEventsReportCompletedStyles}`,
        htmlContent: reportHtmlConfig.reportCompleted,
        containerId: 'reportCompleted',
        onPreviewClick: () => { visualize(repEventsReportCompletedViz);}
    },
    {
        id: "rep-eventsBookmarksReady-container",
        jsContent: `visualize(${authString} ${convertToString(repEventsBookmarksreadyViz)})`,
        cssContent: `${repEventsBookmarksReadyStyles}`,
        htmlContent: reportHtmlConfig.bookmarksReady,
        onPreviewClick: () => { visualize(repEventsBookmarksreadyViz);},
        containerId: 'bookmarkReportcontainer',
        extraLibrary: [jqueryLibrary]
    },
    {
        id: "rep-eventsClick-container",
        jsContent: `visualize(${authString} ${convertToString(repEventsClickViz)})`,
        cssContent: `${repEventsClickStyles}`,
        htmlContent: reportHtmlConfig.clickEvent,
        containerId: 'reportClickEvent',
        onPreviewClick: () => { visualize(repEventsClickViz);}
    },
    {
        id: "rep-tableColumnSort-container",
        jsContent: `visualize(${authString} ${convertToString(repUiControlsTableColumnSortViz)})`,
        cssContent: `${repUiControlsTableColumnSortStyles}`,
        htmlContent: reportHtmlConfig.tableColumnSort,
        onPreviewClick: () => { visualize(repUiControlsTableColumnSortViz);},
        containerId: 'reportTableSorting',
        extraLibrary: [jqueryLibrary]
    },
    {
        id: "rep-tableColumnCondForm-container",
        jsContent: `visualize(${authString} ${convertToString(repUiControlsTableColumnConditionalFormViz)})`,
        cssContent: `${repUiControlsTableColumnConditionalFormStyles}`,
        htmlContent: reportHtmlConfig.tableColumnCondition,
        onPreviewClick: () => { visualize(repUiControlsTableColumnConditionalFormViz);},
        containerId: 'reportTableFormatting',
        extraLibrary: [jqueryLibrary]
    },
    {
        id: "rep-crosstabColumnSort-container",
        jsContent: `visualize(${authString} ${convertToString(repUiControlsCrosstabColumnSortViz)})`,
        cssContent: `${repUiControlsCrosstabColumnSortStyles}`,
        htmlContent: reportHtmlConfig.crosstabColumnSort,
        onPreviewClick: () => { visualize(repUiControlsCrosstabColumnSortViz);},
        containerId: 'crosstabColSorting',
        extraLibrary: [jqueryLibrary, underscoreLibrary]
    },
    {
        id: "rep-crosstabRowSort-container",
        jsContent: `visualize(${authString} ${convertToString(repUiControlsCrosstabRowSortViz)})`,
        cssContent: `${repUiControlsCrosstabRowSortStyles}`,
        htmlContent: reportHtmlConfig.crosstabRowSort,
        onPreviewClick: () => { visualize(repUiControlsCrosstabRowSortViz);},
        containerId: 'crosstabRowSorting',
        extraLibrary: [jqueryLibrary, underscoreLibrary]
    },
    {
        id: "rep-export-formats-container",
        jsContent: `visualize(${authString} ${convertToString(repFormatsExportViz)})`,
        cssContent: `${repFormatsExportStyles}`,
        htmlContent: reportHtmlConfig.exportFormats,
        onPreviewClick: () => { visualize(repFormatsExportViz);},
        containerId: 'reportExport',
        extraLibrary: [jqueryLibrary]
    },
    {
        id: "rep-auto-export-container",
        jsContent: `visualize(${authString} ${convertToString(repAutoExportViz)})`,
        cssContent: `${repAutoExportStyles}`,
        htmlContent: reportHtmlConfig.autoExportReport,
        containerId: 'reportAutoExport',
        onPreviewClick: () => { visualize(repAutoExportViz);}
    },
    {
        id: "rep-csv-render-container",
        jsContent: `visualize(${authString} ${convertToString(repCSVRenderViz)})`,
        cssContent: `${repCSVRenderStyles}`,
        htmlContent: reportHtmlConfig.CSVRenderReport,
        containerId: 'reportCsvExport',
        onPreviewClick: () => { visualize(repCSVRenderViz);},
        extraLibrary: [d3Library, dimpleLibrary]
    },
    {
        id: "rep-json-render-container",
        jsContent: `visualize(${authString} ${convertToString(repJSONRenderViz)})`,
        cssContent: `${repJSONRenderStyles}`,
        htmlContent: reportHtmlConfig.JSONRenderReport,
        containerId: 'reportCsvExport',
        onPreviewClick: () => { visualize(repJSONRenderViz);},
        extraLibrary: [d3Library, dimpleLibrary]
    },
    {
        id: "rep-save-container",
        jsContent: `visualize(${authString} ${convertToString(repSaveViz)})`,
        cssContent: `${repSaveStyles}`,
        htmlContent: reportHtmlConfig.saveReport,
        onPreviewClick: () => { visualize(repSaveViz);},
        containerId: 'reportSave',
        extraLibrary: [jqueryLibrary]
    }
]
