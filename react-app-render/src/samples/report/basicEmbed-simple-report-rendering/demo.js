export const viz = (v) => {
    //show error
    const handleError = (err) => {
        alert(err.message);
    }
    //render report from provided resource
    v("#reportRender").report({
        resource: "/public/Samples/Reports/States",
        error: handleError
    });
}
