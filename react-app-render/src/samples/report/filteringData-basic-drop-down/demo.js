// Change report paramater with custom drop-down

export const viz = (v) => {
    const  showError = (err) => {
        alert(err);
    }
    const report = v.report({
        resource: "/public/Samples/Reports/07g.RevenueDetailReport",
        params: {
            "ProductFamily": ["Drink"]
        },
        container: "#reportDropDown",
        error: showError
    });
    
    $('#repo-param').on('change', (evt) => {
        report
            .params({
           		"ProductFamily": [$(evt.target).val()]
        	})
            .run();
    });
}
