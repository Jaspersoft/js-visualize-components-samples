export const viz = () => {
    let vClient;

    function loginWithLocaleAndRender(userLocale) {
        visualize({
            auth: {
            name: "joeuser",
            password: "joeuser",
            organization: "organization_1",
            locale: userLocale
            }
        }, function(v) {
            // Expose visualize client into shared scope.
            vClient = v;
        
            // Render report into container.
            v("#changeLocale").report({
            resource: "/public/Samples/Reports/PromotionDetailsReport",
            error: function(e) {
                alert(e);
            }
            });
        });
    }

    // Get user locale.
    const userLocale = document.getElementById("userLocale").value;

    // Login with user locale and render report.
    loginWithLocaleAndRender(userLocale);

    // Relogin and re-render on locale change.
    document.getElementById("userLocale").addEventListener('change', (event) => {
        // Using visualize client to logout
        vClient.logout().then(() => {
            loginWithLocaleAndRender(event.target.value);
        });
    });
}