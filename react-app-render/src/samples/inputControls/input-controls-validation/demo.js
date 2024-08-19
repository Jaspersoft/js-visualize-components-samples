export const viz=(v)=> {

    const _report = "/public/Samples/Reports/ProfitDetailReport";

    v.inputControls({
        container: "#inputValidationFilters",
        resource: _report,
        error:  (err)=> {
            console.log(err);
        },
        events: {
            change: (state, validationResult)=> {
                if (validationResult) {
                    console.log(validationResult)
                } else {
                    console.log(state)
                }
            }
        }
    });
};