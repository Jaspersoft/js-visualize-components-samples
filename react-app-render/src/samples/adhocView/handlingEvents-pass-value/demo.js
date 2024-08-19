export const viz = (v) => {
    v.adhocView({
        resource: "/public/viz/Adhoc/Table1",
        container: "#passValues",
        //Use linkOptions to pass selected value
        linkOptions: {
            events: {
              click: (ev, data) => {
                $(".pass-values-selected").html("<span>Clicked: <b>" + ev.currentTarget.innerText + "</b></span>")
                console.log(data);
              }
            }
        },
        success: () => {
            $("#passValues").siblings('.AddNode').remove();
        }
    });
}
