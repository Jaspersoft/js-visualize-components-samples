export const viz= (v) => {
    v.inputControls({
        resource: "/public/viz/InputControl/AllAccounts",
        container: "#allTypesIC",
        error: (err) => {
            console.error(err);
        }
    });
};