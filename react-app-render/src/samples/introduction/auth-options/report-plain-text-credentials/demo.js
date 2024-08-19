export const viz = (v) => {
    // 'v' is a client to JRS (JasperReports Server) instance. User session is established now.

    // Rendering report into container.
    v.report({
      resource: "/public/Samples/Reports/AllAccounts",
      container: "#reportPlainText",
      error: error => {
        alert("Error loading report: " + error.message);
      }
    });
}