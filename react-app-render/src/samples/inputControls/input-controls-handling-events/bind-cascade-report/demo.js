export const viz= (v)=> {

    const report = v.report({
        resource: "/public/Samples/Reports/16g.InteractiveSalesReport",
        container: "#cascadeReport"
    });

    v.inputControls({
        container: "#cascadeIC",
        resource: "/public/Samples/Reports/16g.InteractiveSalesReport",
        error:  (err)=> {
            alert(err);
        },
        events: {
            change:  (params) =>{
                console.log(params);
                report
                    .params(params)
                    .run();
            }
        }
    });
};