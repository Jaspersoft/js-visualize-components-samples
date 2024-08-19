// Visualize: auth with SSO sample

export const viz=() => {
    visualize({
        auth : {
            // Default token name is 'ticket'.
            tokenName: "myCustomTokenName",
            token : "ST-40-CZeUUnGPxEqgScNbxh9l-sso-cas.example.com"
        }
    }, (v) =>{
        // Rendering report into container.
        v.report({
            resource: "/public/Samples/Reports/AllAccounts",
            container: "#reportToken",
            error: error => {
            alert("Error loading report: " + error.message);
            }
        });
    }, error => {
        alert("Error esteblishing connection to JasperReports Server: " + error.message);
    })
}