export interface CommonParamsForInputControl {
    typeConfig?: any;
    params?: { [key: string]: string[] };
    success?: (controls: any) => void;
    error?: (error: any) => void;
    events?: {
        change?: (
            ic: { [key: string]: any[] },
            validationResult: { [key: string]: string } | boolean,
        ) => void;
    };
}

export interface CodeConstants {
    title: string;
    jsCode: string;
    reactCode: string;
    reportUri: string;
    // Optional properties:
    config?: CommonParamsForInputControl;
}

export const CodeForInputControlTypes: CodeConstants[] = [
    {
        title: "Checkbox Boolean Input Control",
        jsCode: `const reportUri = "/public/JVC_IC_Samples/Boolean";
        const configuration: InputControlsConfig = {};
        renderInputControls(
      vContainer.v,
      reportUri,
      document.getElementById("input-controls-container") as HTMLElement,
      configuration
    )`,
        reactCode: ` const reportUri = "/public/JVC_IC_Samples/Boolean";
const panelD: InputControlsConfig = {};
  <InputControls v={vContainer?.v} uri={reportUri} config={panelD} />
`,
        reportUri: "/public/JVC_IC_Samples/Boolean",
        config: {}
    },
    {
        title: "Switch Boolean Input Control",
        jsCode: `const reportUri = "/public/JVC_IC_Samples/Boolean";
        const configuration: InputControlsConfig = { typeConfig: { bool: { type: "switch" } },};
        renderInputControls(
      vContainer.v,
      reportUri,
      document.getElementById("input-controls-container") as HTMLElement,
      configuration,
    )`,
        reactCode: `const reportUri = "/public/JVC_IC_Samples/Boolean";
const panelD: InputControlsConfig = { typeConfig: { bool: { type: "switch" } }, };
  <InputControls v={vContainer?.v} uri={reportUri} config={panelD} />;
`,
        reportUri: "/public/JVC_IC_Samples/Boolean",
        config: {
            typeConfig: {bool: {type: "switch"}}
        }
    },
    {
        title: "Date Input Control",
        jsCode: ` const reportUri = "/public/JVC_IC_Samples/Date";
        const configuration: InputControlsConfig = {},
        renderInputControls(
        vContainer.v,
        reportUri,
        document.getElementById("input-controls-container") as HTMLElement,
        configuration,
        )`,
        reactCode: `const reportUri = "/public/JVC_IC_Samples/Date";
const panelD: InputControlsConfig = {};
<InputControls v={vContainer?.v} uri={reportUri} config={panelD} />;
`,
        reportUri: "/public/JVC_IC_Samples/Date",
        config: {}
    },
    {
        title: "Datetime Input Control",
        jsCode: ` const reportUri = "/public/JVC_IC_Samples/Datetime";
        const configuration: InputControlsConfig = {},
        renderInputControls(
        vContainer.v,
        reportUri,
        document.getElementById("input-controls-container") as HTMLElement,
        configuration,
        )`,
        reactCode: `const reportUri = "/public/JVC_IC_Samples/Datetime";
const panelD: InputControlsConfig = {};
<InputControls v={vContainer?.v} uri={reportUri} config={panelD} />;
`,
        reportUri: "/public/JVC_IC_Samples/Datetime",
        config: {}
    },
    {
        title: "Multi_Select Input Control",
        jsCode: ` const reportUri = "/public/JVC_IC_Samples/Multi_Select";
        const configuration: InputControlsConfig = {},
        renderInputControls(
        vContainer.v,
        reportUri,
        document.getElementById("input-controls-container") as HTMLElement,
        configuration,
        )`,
        reactCode: `const reportUri = "/public/JVC_IC_Samples/Multi_Select";
const panelD: InputControlsConfig = {};
<InputControls v={vContainer?.v} uri={reportUri} config={panelD} />;
`,
        reportUri: "/public/JVC_IC_Samples/Multi_Select",
        config: {}
    },
    {
        title: "Number Input Control",
        jsCode: ` const reportUri = "/public/JVC_IC_Samples/Number";
        const configuration: InputControlsConfig = {},
        renderInputControls(
        vContainer.v,
        reportUri,
        document.getElementById("input-controls-container") as HTMLElement,
        configuration,
        )`,
        reactCode: `const reportUri = "/public/JVC_IC_Samples/Number";
const panelD: InputControlsConfig = {};
<InputControls v={vContainer?.v} uri={reportUri} config={panelD} />;
`,
        reportUri: "/public/JVC_IC_Samples/Number",
        config: {}
    },
    {
        title: "Single_Select Input Control",
        jsCode: ` const reportUri = "/public/JVC_IC_Samples/Single_Select";
        const configuration: InputControlsConfig = {},
        renderInputControls(
        vContainer.v,
        reportUri,
        document.getElementById("input-controls-container") as HTMLElement,
        configuration,
        )`,
        reactCode: `const reportUri = "/public/JVC_IC_Samples/Single_Select";
const panelD: InputControlsConfig = {};
<InputControls v={vContainer?.v} uri={reportUri} config={panelD} />;
`,
        reportUri: "/public/JVC_IC_Samples/Single_Select",
        config: {}
    },
    {
        title: "Text Input Control",
        jsCode: ` const reportUri = "/public/JVC_IC_Samples/Text";
        const configuration: InputControlsConfig = {},
        renderInputControls(
        vContainer.v,
        reportUri,
        document.getElementById("input-controls-container") as HTMLElement,
        configuration,
        )`,
        reactCode: `const reportUri = "/public/JVC_IC_Samples/Text";
const panelD: InputControlsConfig = {};
<InputControls v={vContainer?.v} uri={reportUri} config={panelD} />;
`,
        reportUri: "/public/JVC_IC_Samples/Text",
        config: {}
    },
    {
        title: "Time Input Control",
        jsCode: ` const reportUri = "/public/JVC_IC_Samples/Time";
        const configuration: InputControlsConfig = {},
        renderInputControls(
        vContainer.v,
        reportUri,
        document.getElementById("input-controls-container") as HTMLElement,
        configuration,
        )`,
        reactCode: `const reportUri = "/public/JVC_IC_Samples/Time";
const panelD: InputControlsConfig = {};
<InputControls v={vContainer?.v} uri={reportUri} config={panelD} />;
`,
        reportUri: "/public/JVC_IC_Samples/Time",
        config: {}
    }
];