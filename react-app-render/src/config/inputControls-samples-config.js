import {viz as inputControlBindingReportScript} from '../samples/inputControls/binding-with-reports/demo';
import inputControlBindingReportStyle from '../samples/inputControls/binding-with-reports/demo.css';
import {viz as inputControlAllTypesCssScript} from '../samples/inputControls/css-overrides/all-types/demo';
import inputControlAllTypesCssStyle from '../samples/inputControls/css-overrides/all-types/demo.css';
import {viz as inputControlSpecificCssOverrideScript} from '../samples/inputControls/css-overrides/specific-overrides/demo';
import inputControlSpecificCssOverrideStyle from '../samples/inputControls/css-overrides/specific-overrides/demo.css';
import {viz as inputControlCustomDropdownScript} from '../samples/inputControls/input-controls-data/custom-dropdown/demo';
import inputControlCustomDropdownStyle from '../samples/inputControls/input-controls-data/custom-dropdown/demo.css';
import {viz as inputControlShowInsideTableScript} from '../samples/inputControls/input-controls-data/show-inside-table/demo';
import inputControlShowInsideTableStyle from '../samples/inputControls/input-controls-data/show-inside-table/demo.css';
import {viz as inputControlBindCascadeReportScript} from '../samples/inputControls/input-controls-handling-events/bind-cascade-report/demo';
import inputControlBindCascadeReportStyle from '../samples/inputControls/input-controls-handling-events/bind-cascade-report/demo.css';
import {viz as inputControlCascadeScript} from '../samples/inputControls/input-controls-handling-events/cascade/demo';
import inputControlCascadeStyle from '../samples/inputControls/input-controls-handling-events/cascade/demo.css';
import {viz as inputControlListenChangesScript} from '../samples/inputControls/input-controls-handling-events/listen-changes/demo';
import inputControlListenChangesStyle from '../samples/inputControls/input-controls-handling-events/listen-changes/demo.css';
import {viz as inputControlResettingScript } from '../samples/inputControls/input-controls-resetting/demo';
import inputControlResettingStyle from '../samples/inputControls/input-controls-resetting/demo.css';
import {viz as inputControlValidationScript} from '../samples/inputControls/input-controls-validation/demo';
import inputControlValidationStyle from '../samples/inputControls/input-controls-validation/demo.css';
import {viz as inputControlViewControlCascadeScript} from '../samples/inputControls/view-control-types/cascade/demo';
import inputControlViewControlCascadeStyle from '../samples/inputControls/view-control-types/cascade/demo.css';
import {viz as inputControlViewControlMultiCascadeScript} from '../samples/inputControls/view-control-types/cascade-multi-single/demo';
import inputControlViewControlMultiCascadeStyle from '../samples/inputControls/view-control-types/cascade-multi-single/demo.css';
import {viz as inputControlDefaultValuesScript} from '../samples/inputControls/view-control-types/default-values/demo';
import inputControlDefaultValuesStyle from '../samples/inputControls/view-control-types/default-values/demo.css';
import {viz as inputControlRenderScript} from '../samples/inputControls/view-control-types/render-input-control/demo';
import inputControlRenderStyle from '../samples/inputControls/view-control-types/render-input-control/demo.css';
import { convertToString , authString} from '../utils/common.utils'
import {inputControlsHtmlConfig} from "./inputControlsHtmlContent";
import { jqueryLibrary } from '../samplesConstants'

export const inputControlsConfig = [
    {
        id: 'inputControl-custom-dropdown-container',
        jsContent: `visualize(${authString} ${convertToString(inputControlCustomDropdownScript)})`,
        cssContent: `${inputControlCustomDropdownStyle}`,
        htmlContent: inputControlsHtmlConfig.customDropdown,
        onPreviewClick: () => { visualize(inputControlCustomDropdownScript)},
        containerId: 'inputDropDown',
        extraLibrary: [jqueryLibrary]
    },
    {
        id: 'inputControl-inside-table-container',
        jsContent: `visualize(${authString} ${convertToString(inputControlShowInsideTableScript)})`,
        cssContent: `${inputControlShowInsideTableStyle}`,
        htmlContent: inputControlsHtmlConfig.insideTable,
        containerId: 'inputInsideTable',
        onPreviewClick: () => { visualize(inputControlShowInsideTableScript)}
    },
    {
        id: 'inputControl-bind-report-container',
        jsContent: `visualize(${authString} ${convertToString(inputControlBindingReportScript)})`,
        cssContent: `${inputControlBindingReportStyle}`,
        htmlContent: inputControlsHtmlConfig.bindReport,
        containerId: 'report',
        onPreviewClick: () => { visualize(inputControlBindingReportScript)}
    },
    {
        id: 'inputControl-reset-container',
        jsContent: `visualize(${authString} ${convertToString(inputControlResettingScript)})`,
        cssContent: `${inputControlResettingStyle}`,
        htmlContent: inputControlsHtmlConfig.resetScript,
        containerId: 'containerInput',
        onPreviewClick: () => { visualize(inputControlResettingScript)}
    },
    {
        id: 'inputControl-listen-changes-container',
        jsContent: `visualize(${authString} ${convertToString( inputControlListenChangesScript)})`,
        cssContent: `${inputControlListenChangesStyle}`,
        htmlContent: inputControlsHtmlConfig.listenChanges,
        onPreviewClick: () => { visualize(inputControlListenChangesScript)},
        containerId: 'listenChangesContainer',
        extraLibrary: [jqueryLibrary]
    },
    {
        id: 'inputControl-cascade-container',
        jsContent: `visualize(${authString} ${convertToString( inputControlCascadeScript)})`,
        cssContent: `${inputControlCascadeStyle}`,
        htmlContent: inputControlsHtmlConfig.cascade,
        containerId: 'cascadeContainer',
        onPreviewClick: () => { visualize(inputControlCascadeScript)}
    },
    {
        id: 'inputControl-bind-cascade-report-container',
        jsContent: `visualize(${authString} ${convertToString(inputControlBindCascadeReportScript)})`,
        cssContent: `${inputControlBindCascadeReportStyle}`,
        htmlContent: inputControlsHtmlConfig.bindCascadeReport,
        containerId: 'cascadeReport',
        onPreviewClick: () => { visualize(inputControlBindCascadeReportScript)}
    },
    {
        id: 'inputControl-validation-container',
        jsContent: `visualize(${authString} ${convertToString(inputControlValidationScript)})`,
        cssContent: `${inputControlValidationStyle}`,
        htmlContent: inputControlsHtmlConfig.validateScript,
        containerId: 'inputValidationFilters',
        onPreviewClick: () => { visualize(inputControlValidationScript)}
    },
    {
        id: 'inputControl-render-container',
        jsContent: `visualize(${authString} ${convertToString(inputControlRenderScript)})`,
        cssContent: `${inputControlRenderStyle}`,
        htmlContent: inputControlsHtmlConfig.renderScript,
        containerId: 'renderInputControlContainer',
        onPreviewClick: () => { visualize(inputControlRenderScript)}
    },
    {
        id: 'inputControl-default-values-container',
        jsContent: `visualize(${authString} ${convertToString(inputControlDefaultValuesScript)})`,
        cssContent: `${inputControlDefaultValuesStyle}`,
        htmlContent: inputControlsHtmlConfig.defaultValues,
        containerId: 'containerInputDefault',
        onPreviewClick: () => { visualize(inputControlDefaultValuesScript)}
    },
    {
        id: 'inputControl-cascade-view-container',
        jsContent: `visualize(${authString} ${convertToString(inputControlViewControlCascadeScript)})`,
        cssContent: `${inputControlViewControlCascadeStyle}`,
        htmlContent: inputControlsHtmlConfig.controlCascade,
        containerId: 'inputWithCascade',
        onPreviewClick: () => { visualize(inputControlViewControlCascadeScript)}
    },
    {
        id: 'inputControl-multi-cascade-container',
        jsContent: `visualize(${authString} ${convertToString(inputControlViewControlMultiCascadeScript)})`,
        cssContent: `${inputControlViewControlMultiCascadeStyle}`,
        htmlContent: inputControlsHtmlConfig.multiCascade,
        containerId: 'containerInputMulti',
        onPreviewClick: () => { visualize(inputControlViewControlMultiCascadeScript)}
    },
    {
        id: 'inputControl-css-override-container',
        jsContent: `visualize(${authString} ${convertToString(inputControlSpecificCssOverrideScript)})`,
        cssContent: `${inputControlSpecificCssOverrideStyle}`,
        htmlContent: inputControlsHtmlConfig.specificCssOverride,
        containerId: 'specificOverridesContainer',
        onPreviewClick: () => { visualize(inputControlSpecificCssOverrideScript)}
    },
    {
        id: 'inputControl-all-css-container',
        jsContent: `visualize(${authString} ${convertToString(inputControlAllTypesCssScript)})`,
        cssContent: `${inputControlAllTypesCssStyle}`,
        htmlContent: inputControlsHtmlConfig.allTypesCss,
        containerId: 'allTypesIC',
        onPreviewClick: () => { visualize(inputControlAllTypesCssScript)}
    },
]