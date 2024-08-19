export const viz = (v) => {
    //enable report chooser
    $(':disabled').prop('disabled', false);
    const createReport = (uri) => {
        v("#reportList").report({
            resource: uri,
            error: (err) => {
                alert(err.message);
            }
        });
    };
    const selectedRes = $("#selected_resource_new_list")
    createReport(selectedRes.val());

    selectedRes.change(function () {
        $("#reportList").html("");
        createReport($("#selected_resource_new_list").val());
    });
            
}
export const vizerror = (err) =>{
    alert(err.message);
}