export interface CodeConstants {
    title: string;
    code: string;
    isJS: boolean;
}

export const CodeForInputControlTypes: CodeConstants[] = [
    {
        title: "Switch Boolean Input Control",
        isJS: true,
        code: `renderInputControls(
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
    )`
    },
    {
        title: "Checkbox Boolean Input Control",
        isJS: true,
        code: `renderInputControls(
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
    )`
    }
]