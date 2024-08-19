export const viz = (v) => {
    v.report({
        resource: "/public/Samples/Reports/AllAccounts",
        container: "#changeTotalPages",
        error: (error) => {
            alert(error);
        },
        events: {
            changeTotalPages: (totalPages) => {
                alert("Total Pages:" + totalPages);
            }
        }
    });
}