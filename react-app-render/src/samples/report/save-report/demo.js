export const viz= (v) => {
    //render report from provided resource
    const report = v.report({
        resource: $("#save-selected_resource").val(),
        error: (err)=>{
            alert(err.message);
        },
        container: "#reportSave",
        runImmediately: false
    });
    report.run();
    $("#saveReport").click(()=>{
        const folder = $("#saveReportfolder").val(),
            label = $("#saveReportLabel").val(),
            description = $("#saveReportDescription").val();
        if(folder){
            const options = {};
            options.folderUri = folder;
            if(label){
                options.label = label;
            }
            if(description){
                options.description = description;
            }
            options.overwrite = $("#saveReportOverwrite").prop("checked");
            report.save(options);
        } else {
            report.save();
        }
    });

    $("#save-selected_resource").change(()=> {
        //clean container
        $("#reportSave").html("");
        //render report from another resource
        v("#reportSave").report({
            resource: $("save-selected_resource").val(),
            error:(err)=>{
                alert(err.message);
            }
        });
    });

    const toggleDisable = (id, state) => {
        $(id).prop('disabled', state);
    }
     //enable report chooser
    toggleDisable('#save-selected_resource', false)
    toggleDisable('#saveReport', false)
    toggleDisable('#saveReportfolder', false)
    toggleDisable('#saveReportLabel', false)
    toggleDisable('#saveReportDescription', false)
    toggleDisable('#saveReportOverwrite', false)
};