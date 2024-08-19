export const viz = (v) => {
    const handleError = (err) => {
        alert(err.message);
    }

    v("#reportParamPass").report({
        resource: "/public/Samples/Reports/ProfitDetailReport",
        error: handleError,
        // Pass and control individual paramaters
        params: {
            "ProductFamily": ["Food", "Drink"]
        }
    });
}
