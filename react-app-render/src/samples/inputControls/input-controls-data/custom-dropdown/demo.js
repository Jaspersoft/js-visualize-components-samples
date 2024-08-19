export const viz=(v)=> {

    const buildControl=(control)=> {
        const buildOptions=(options)=> {
            const template = "<option>{value}</option>";
            return options.reduce((memo, option)=> {
                return memo + template.replace("{value}", option.value);
            }, "")
        };

        const template = "<br>&nbsp;<label>{label}</label>&nbsp;<select>{options}</select><br>",
            content = template.replace("{label}", control.label)
                .replace("{options}", buildOptions(control.state.options));

        $("#inputDropDown > .loader").css('display', 'none')
        $("#inputDropDown").append($(content));
    };
    
    v.inputControls({
        resource: "/public/Samples/Reports/9g.CustomerDetailReport",
        success: (controls) => {
            controls.forEach(buildControl);
            //Remove custom loading indicator once data has successfully loaded
        },
        error: (err) => {
            alert(err);
        }
    });
};