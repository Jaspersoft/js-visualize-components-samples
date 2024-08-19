export const viz1 = (v) => {
    v("#multipleReports1").report({
        resource: "/public/Samples/Reports/06g.ProfitDetailReport",
        error: (err) => {
            alert(err.message);
        }
    });
}

export const viz2 = (v) => {
    v("#multipleReports2").report({
        resource: "/public/Samples/Reports/State_Performance",
        error: (err) => {
            alert(err.message);
        }
    });
}