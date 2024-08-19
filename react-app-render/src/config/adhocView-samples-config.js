import { viz as advBasicEmbedCrosstabWithCssViz } from '../samples/adhocView/basicEmbed-crosstab-with-css/demo'
import basicEmebedCrosstabWithCssStyles from '../samples/adhocView/basicEmbed-crosstab-with-css/demo.css'
import { viz as advBasicEmbedCustomizableWithCssViz } from '../samples/adhocView/basicEmbed-customize-with-css/demo'
import basicEmebedCutomizableWithCssStyles from '../samples/adhocView/basicEmbed-customize-with-css/demo.css'
import { viz as advBasicEmbedRenderTableViz } from '../samples/adhocView/basicEmbed-render-table/demo'
import basicEmebedRenderTableCssStyles from '../samples/adhocView/basicEmbed-render-table/demo.css'
import { viz as advChangingVizTypeViz } from '../samples/adhocView/changing-viz-type/demo.js'
import changingvizTypeStyles from '../samples/adhocView/changing-viz-type/demo.css'
import { viz as advHEpassValueViz } from '../samples/adhocView/handlingEvents-pass-value/demo'
import advHEpassValueStyles from '../samples/adhocView/handlingEvents-pass-value/demo.css'
import { viz as advHEfieldsAndMeasureViz } from '../samples/adhocView/handlingEvents-fields-and-measures/demo'
import advHEfieldAndMeasureStyles from '../samples/adhocView/handlingEvents-fields-and-measures/demo.css'
import { viz as advHEdrillDownOnSelectionViz } from '../samples/adhocView/handlingEvents-driil-down-on-selection/demo'
import advHEdrillDownOnSelectionStyles from '../samples/adhocView/handlingEvents-driil-down-on-selection/demo.css'
import { viz as advHEinNewViewViz } from '../samples/adhocView/handlingEvents-in-new-view/demo'
import advHEinNewViewStyles from '../samples/adhocView/handlingEvents-in-new-view/demo.css'
import {advHtmlConfig} from "./adhocViewHtml";
import { viz as advfilteringParametersViz } from '../samples/adhocView/filtering-parameters/demo'
import advfilteringParametersStyles from '../samples/adhocView/filtering-parameters/demo.css'
import { convertToString , authString} from '../utils/common.utils'
import { jqueryLibrary } from '../samplesConstants'


export const adhocConfig = [
    {
        id: 'adv-renderTable-container',
        jsContent: `visualize(${authString} ${convertToString(advBasicEmbedRenderTableViz)})`,
        cssContent: `${basicEmebedRenderTableCssStyles}`,
        htmlContent: advHtmlConfig.renderTable,
        containerId: 'renderTable',
        onPreviewClick: () => { visualize(advBasicEmbedRenderTableViz)}
    },
    {
        id: 'adv-customizableWithCSS-container',
        jsContent: `visualize(${authString} ${convertToString(advBasicEmbedCustomizableWithCssViz)})`,
        cssContent: `${basicEmebedCutomizableWithCssStyles}`,
        htmlContent: advHtmlConfig.customizableWithCSS,
        containerId: 'customizeWithCss',
        onPreviewClick: () => { visualize(advBasicEmbedCustomizableWithCssViz)}
    },
    {
        id: 'adv-crosstabeWithCSS-container',
        jsContent: `visualize(${authString} ${convertToString(advBasicEmbedCrosstabWithCssViz)})`,
        cssContent: `${basicEmebedCrosstabWithCssStyles}`,
        htmlContent: advHtmlConfig.crosstabeWithCSS,
        containerId: 'crosstabWithCss',
        onPreviewClick: () => { visualize(advBasicEmbedCrosstabWithCssViz)}
    },
    {
        id: 'adv-changeVizType-container',
        jsContent: `visualize(${authString} ${convertToString(advChangingVizTypeViz)})`,
        cssContent: `${changingvizTypeStyles}`,
        htmlContent: advHtmlConfig.changeVizType,
        containerId: 'chartWithSelectors',
        onPreviewClick: () => { visualize(advChangingVizTypeViz)}
    },
    {
        id: 'adv-filteringData-container',
        jsContent: `visualize(${authString} ${convertToString(advfilteringParametersViz)})`,
        cssContent: `${advfilteringParametersStyles}`,
        htmlContent: advHtmlConfig.filteringParameter,
        containerId: 'filteringParameter',
        onPreviewClick: () => { visualize(advfilteringParametersViz)}
    },
    {
        id: 'adv-HE-passValue-container',
        jsContent: `visualize(${authString} ${convertToString(advHEpassValueViz)})`,
        cssContent: `${advHEpassValueStyles}`,
        htmlContent: advHtmlConfig.passValue,
        containerId: 'passValues',
        onPreviewClick: () => { visualize(advHEpassValueViz)},
        extraLibrary: [jqueryLibrary]
    },
    {
        id: 'adv-HE-fieldsAndMeasure-container',
        jsContent: `visualize(${authString} ${convertToString(advHEfieldsAndMeasureViz)})`,
        cssContent: `${advHEfieldAndMeasureStyles}`,
        htmlContent: advHtmlConfig.fieldsAndMeasures,
        containerId: 'fieldsMeasures',
        onPreviewClick: () => { visualize(advHEfieldsAndMeasureViz)},
        extraLibrary: [jqueryLibrary]
    },
    {
        id: 'adv-HE-drillDownOnSelection-container',
        jsContent: `visualize(${authString} ${convertToString(advHEdrillDownOnSelectionViz)})`,
        cssContent: `${advHEdrillDownOnSelectionStyles}`,
        htmlContent: advHtmlConfig.drillDown,
        onPreviewClick: () => { visualize(advHEdrillDownOnSelectionViz)},
        containerId: 'drilldownContainer',
        extraLibrary: [jqueryLibrary]
    },
    {
        id: 'adv-HE-inNewView-container',
        jsContent: `visualize(${authString} ${convertToString(advHEinNewViewViz)})`,
        cssContent: `${advHEinNewViewStyles}`,
        htmlContent: advHtmlConfig.inNewView,
        onPreviewClick: () => { visualize(advHEinNewViewViz)},
        containerId: 'secondContainerNewView',
        extraLibrary: [jqueryLibrary]
    },
]