export const viz=(v)=> {
    v.inputControls({
        container: "#listenChangesContainer",
        resource: "/public/Samples/Reports/06g.ProfitDetailReport",
        error:  (err) => {
            alert(err);
        },
        events: {
            change : (params) => {
                $("#hint").show(); 
                $("#output").text(params['ProductFamily'].join(', '));
            }
        }
    });
};