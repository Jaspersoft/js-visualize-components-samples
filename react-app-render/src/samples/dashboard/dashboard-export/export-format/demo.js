export const viz =(v)=> {
    const buildControl= (name, options) => {

        const buildOptions=(options)=> {
            const template = "<option>{value}</option>";
            return options.reduce( (memo, option)=> {
                return memo + template.replace("{value}", option);
            }, "")
        }

        const template = "<label>{label}</label><select>{options}</select><br>",
            content = template.replace("{label}", name)
                .replace("{options}", buildOptions(options));

        const $control = $(content);
        $control.insertBefore($("#dash-export-button"));
        return $($control[1]);
    }
    //add custom export format
    //(should throw a proper error)
    const dashboardExports = v.dashboard
        .exportFormats
        .concat(["json"]);
    const $select = buildControl("Export to: ",dashboardExports),
        $button = $("#dash-export-button"),
        dashboard = v.dashboard({
            resource: "/public/Samples/Dashboards/New_Dashboard",
            container: "#dashboardExport",
            success:  ()=> {
                $button.prop("disabled", false);
            },
            error:  (error) => {
                console.log(error);
            }
        });

    $button.click(()=> {

        console.log($select.val());

        dashboard.export({
            //export options here
            outputFormat: $select.val(),
            //exports all pages if not specified
            //pages: "1-2"
        },  (link)=> {
            window.location.href = link.href ? link.href : link;
        },  (error) =>{
            console.log(error);
        });
    });
};