// Visualize: Login/Logout with hooks
// TODO: This sample can be rewritten to use /rest_v2/login endpoint when JRS 8.x is used because JRS 7.8.1 (current mobile demo) does not support OPTIONS method (CORS) for this endpoint.

export const viz=() => {
    visualize({
        auth: {
            name: "joeuser",
            password: "joeuser",
            organization: "organization_1",
            loginFn: (properties, request) => {
                // Use whatever you want to establish authentication.
                // Be aware of Cross-Origin Resource Sharing (CORS) policies when making requests. 
                alert("Send custom login request. To 'https://mobiledemo.jaspersoft.com/jasperserver-pro/j_spring_security_check'");

                return request({
                    url: "https://mobiledemo.jaspersoft.com/jasperserver-pro/j_spring_security_check?j_username=" + properties.name + "&j_password=" + properties.password + "&orgId=" + properties.organization
                });
            },
            logoutFn: (properties, request) => {
                // Use whatever you want to destroy session.
                // Be aware of Cross-Origin Resource Sharing (CORS) policies when making requests.
                alert("Send custom logout request. To 'https://mobiledemo.jaspersoft.com/jasperserver-pro/logout.html'");
                return request({
                    url: "https://mobiledemo.jaspersoft.com/jasperserver-pro/logout.html"
                });
            }
        }
    }, (v) => {
        // Rendering report into container.
        v.report({
            resource: "/public/Samples/Reports/AllAccounts",
            container: "#reportLogin",
            error: error => {
                alert("Error loading report: " + error.message);
            }
        });
    }, error => {
        alert("Error esteblishing connection to JasperReports Server: " + error.message);
    });
}
