export interface CodeConstants {
    title: string;
    jsCode: string;
    reactCode: string;
}

export const CodeForInputControlTypes: CodeConstants[] = [
    {
        title: "Switch Boolean Input Control",
        jsCode: `renderInputControls(
      vContainer.v,
      "/BOOLEAN/REPORT/URI",
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
`
    },
    {
        title: "Checkbox Boolean Input Control",
        jsCode: `renderInputControls(
      vContainer.v,
      "/BOOLEAN/REPORT/URI",
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
  };
  <InputControls v={vContainer?.v} uri={reportUri} config={panelD} />
`

    }
]