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
        title: "Switch Boolean Input Control",
        jsCode: `renderInputControls(
      vContainer.v,
      "/public/viz/Adhoc/Ad_Hoc_View_All_filters_Report",
      document.getElementById("input-controls-container") as HTMLElement,
      {
        success: () => {
          console.log("Input controls rendered successfully");
        },
        error: (error) => {
          console.log("Error rendering input controls: ", error);
        },
        typeConfig: { bool: { type: "switch" } },
        events: {
          change: (ics, validationResult) => {
            console.log("validationResult => ", validationResult);
            console.log("ics => ", ics);
          },
        },
      },
    )`,
        reactCode: `const panelD: InputControlsConfig = {
    typeConfig: { bool: { type: "switch" } },
    events: {
      change: (ics: any, vs: any) => {
        console.log("ics: ", ics);
        if (vs) console.log("Validations: ", vs);
      },
    },
  };
  <InputControls v={vContainer?.v} uri={reportUri} config={panelD} />
`,
        reportUri: "/public/viz/Adhoc/Ad_Hoc_View_All_filters_Report",
    },
    {
        title: "Checkbox Boolean Input Control",
        jsCode: `renderInputControls(
      vContainer.v,
      "/public/viz/Adhoc/Ad_Hoc_View_All_filters_Report",
      document.getElementById("input-controls-container") as HTMLElement,
      {
        success: () => {
          console.log("Input controls rendered successfully");
        },
        error: (error) => {
          console.log("Error rendering input controls: ", error);
        },
        typeConfig: { bool: { type: "checkbox" } }, // you can omit this property as it is the default value.
        events: {
          change: (ics, validationResult) => {
            console.log("validationResult => ", validationResult);
            console.log("ics => ", ics);
          },
        },
        params: {
            column_boolean_1: ["false"],
            column_string_1: [
                "This is a predefined text different than the stored in the server",
            ],
            id_1: ["99"],
            column_date_1: ["2009-03-02"],
            column_timestamp_1: ["2014-03-02T10:00:00"],
            column_time_1: ["14:00:00"],
        }
      },
    )`,
        reactCode: `const panelD: InputControlsConfig = {
    typeConfig: { bool: { type: "checkbox" } },
    events: {
      change: (ics: any, vs: any) => {
        console.log("ics: ", ics);
        if (vs) console.log("Validations: ", vs);
      },
    },
    params: {
            column_boolean_1: ["false"],
            column_string_1: [
                "This is a predefined text different than the stored in the server",
            ],
            id_1: ["99"],
            column_date_1: ["2009-03-02"],
            column_timestamp_1: ["2014-03-02T10:00:00"],
            column_time_1: ["14:00:00"],
        }
  };
  <InputControls v={vContainer?.v} uri={reportUri} config={panelD} />;
`,
        reportUri: "/public/viz/Adhoc/Ad_Hoc_View_All_filters_Report",
        config: {
            params: {
                column_boolean_1: ["false"],
                column_string_1: [
                    "This is a predefined text different than the stored in the server",
                ],
                id_1: ["99"],
                column_date_1: ["2009-03-02"],
                column_timestamp_1: ["2014-03-02T10:00:00"],
                column_time_1: ["14:00:00"],
            },
        }

    }
];