export const viz=(v)=> {

    const buildTable=(control)=>{

        const buildRows=(options)=> {
            const template = "<tr><td>{value}</td></tr>";
            return options.reduce((memo, option)=> {
                return memo + template.replace("{value}", option.value);
            }, "")
        };

        const template = "<table class='table'>" +
            "<thead><tr><td>{label}</td></tr></thead>" +
            "<tbody{rows}</tbody>" +
            "</table>";
        const content = template.replace("{label}", control.label)
            .replace("{rows}", buildRows(control.state.options));

        $("#inputInsideTable > .loader").css('display', 'none')
        $("#inputInsideTable").append($(content));
    };
  //use input controls as service to get data from the server

  v.inputControls({
    resource: "/public/Samples/Reports/9g.CustomerDetailReport",
    success: (controls)=> {
      controls.forEach(buildTable);
    },
    error: (err)=> {
      alert(err);
    }
  });
};