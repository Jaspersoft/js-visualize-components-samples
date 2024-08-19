export const viz = (v) => {
    const buildControl = (name, options) => {

        function buildOptions(options) {
            const template = "<option>{value}</option>";
            return options.reduce((memo, option)=> {
                return memo + template.replace("{value}", option);
            }, "")
        }

        const template = "<label>{label}</label><select>{options}</select><br>",
            content = template.replace("{label}", name)
                .replace("{options}", buildOptions(options));

        const $control = $(content);
        $control.insertBefore($("#repoExportbutton"));
        //return select
        return $($control[1]);
    }
    //add custom export format
    //(should throw a proper error)
    const reportExports = v.report
        .exportFormats
        .concat(["json"]);
    const $select = buildControl("Export to: ",reportExports),
        $button = $("#repoExportbutton"),
        report = v.report({
            resource: "/public/Samples/Reports/AllAccounts",
            container: "#reportExport",

            success: () =>{
                $button.prop('disabled', false)
            },

            error: (error)=> {
                console.log(error);
            }
        });

    $button.click(() => {
        console.log($select.val());
        
        report.export({
            //export options here        
            outputFormat: $select.val(),
            //exports all pages if not specified
            //pages: "1-2"
        }, (link) => {
            window.location.href = link.href ? link.href : link;
        }, (error)=> {
            console.log(error);
        });
    });
};