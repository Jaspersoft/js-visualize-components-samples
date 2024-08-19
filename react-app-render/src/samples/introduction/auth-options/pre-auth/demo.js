// Visualize: auth with pre-auth sample

export const viz=() => {
    visualize({
        auth: {
            // Pre-authentication token.
            token: encodeURIComponent("u=John|r=Ext_User|o=organization_1|pa1=USA|pa2=1"),
            // Enable pre-authentication (different JRS endpoint is used in this case).
            preAuth: true,
            tokenName: "pp"
        }
    }, (v) =>{
        // Rendering report into container.
        v.report({
            resource: "/public/Samples/Reports/AllAccounts",
            container: "#reportPreAuthToken",
            error: error => {
                alert("Error loading report: " + error.message);
            }
        });
    }, error => {
        alert("Error esteblishing connection to JasperReports Server: " + error.message);
    })
}