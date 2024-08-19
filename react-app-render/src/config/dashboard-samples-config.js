import { viz as dashboardBasicEmbedScript } from '../samples/dashboard/dashboard-basic-embed/demo';
import  dashboardBasicEmbedStyles from '../samples/dashboard/dashboard-basic-embed/demo.css';
import { viz as dashboardExportFormatScript} from '../samples/dashboard/dashboard-export/export-format/demo';
import dashboardExportFormatStyle from '../samples/dashboard/dashboard-export/export-format/demo.css';
import {viz as dashboardAutoExportScript} from '../samples/dashboard/dashboard-export/auto-export/demo';
import dashboardAutoExportStyle from '../samples/dashboard/dashboard-export/auto-export/demo.css';
import {viz as dashboardFilteringParamScript} from '../samples/dashboard/dashboard-filtering/dash-param/demo';
import dashboardFilteringParamStyle from '../samples/dashboard/dashboard-filtering/dash-param/demo.css';
import {viz as dashboardFilteringUndoRedoScript} from '../samples/dashboard/dashboard-filtering/undo-redo/demo';
import dashboardFilteringUndoRedoStyle from '../samples/dashboard/dashboard-filtering/undo-redo/demo.css';
import {viz as dashboardEventHandlingScript} from '../samples/dashboard/dashboard-handling-events/demo';
import dashboardEventHandlingStyle from '../samples/dashboard/dashboard-handling-events/demo.css';
import { convertToString , authString} from '../utils/common.utils'
import {dashboardHtmlConfig} from "./dashboardHtmlContent";
import { jqueryLibrary } from '../samplesConstants'

export const dashboardConfig = [
    {
        id: 'dashboard-renderTable-container',
        jsContent: `visualize(${authString} ${convertToString(dashboardBasicEmbedScript)})`,
        cssContent: `${dashboardBasicEmbedStyles}`,
        containerId: 'dashboardRender',
        htmlContent: dashboardHtmlConfig.renderTable,
        onPreviewClick: () => { visualize(dashboardBasicEmbedScript)}
    },
    {
        id: 'dashboard-filterParam-container',
        jsContent: `visualize(${authString} ${convertToString(dashboardFilteringParamScript)})`,
        cssContent: `${dashboardFilteringParamStyle}`,
        htmlContent: dashboardHtmlConfig.filterData,
        onPreviewClick: () => { visualize(dashboardFilteringParamScript)},
        containerId: 'dashboardParam',
        extraLibrary: [jqueryLibrary]
    },
    {
        id: 'dashboard-filter-UndoRedo-container',
        jsContent: `visualize(${authString} ${convertToString(dashboardFilteringUndoRedoScript)})`,
        cssContent: `${dashboardFilteringUndoRedoStyle}`,
        htmlContent: dashboardHtmlConfig.undoRedoData,
        onPreviewClick: () => { visualize(dashboardFilteringUndoRedoScript)},
        containerId: 'dashboardUndo',
        extraLibrary: [jqueryLibrary]
    },
    {
        id: 'dashboard-event-handling-container',
        jsContent: `visualize(${authString} ${convertToString(dashboardEventHandlingScript)})`,
        cssContent: `${dashboardEventHandlingStyle}`,
        htmlContent: dashboardHtmlConfig.handlingEvent,
        onPreviewClick: () => { visualize(dashboardEventHandlingScript)},
        containerId: 'dashboardEventHandlingmain',
        extraLibrary: [jqueryLibrary]
    },
    {
        id: 'dashboard-export-format-container',
        jsContent: `visualize(${authString} ${convertToString(dashboardExportFormatScript)})`,
        cssContent: `${dashboardExportFormatStyle}`,
        htmlContent: dashboardHtmlConfig.exportFormat,
        onPreviewClick: () => { visualize(dashboardExportFormatScript)},
        containerId: 'dashboardExport',
        extraLibrary: [jqueryLibrary]
    },
    {
        id: 'dashboard-auto-export-container',
        jsContent: `visualize(${authString} ${convertToString(dashboardAutoExportScript)})`,
        cssContent: `${dashboardAutoExportStyle}`,
        htmlContent: dashboardHtmlConfig.autoExport,
        containerId: 'dashboardAutoExport',
        onPreviewClick: () => { visualize(dashboardAutoExportScript)}
    }

]
