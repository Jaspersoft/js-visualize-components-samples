export const viz =(v)=> {
    const initialParams = {};
    const buildParamsInput =()=> {
        const params = dashboard.data().parameters;

        for (let i = params.length-1; i >= 0; i--) {
            const $el = $("<div>" + params[i].id + ": <input type='text' data-paramId='" + params[i].id + "'/></div>");

            $(".dashboardApplyInputFields").append($el);

            $el.find("input").val(initialParams[params[i].id]);
        }
    }
    const dashboard = v.dashboard({
        resource: "/public/Samples/Dashboards/2._Performance_Summary_Dashboard",
        container: "#dashboardParam",
        error: (err) => {
            alert(err)
        },
        success: () => {
            $(".dashboardApplyParams").prop("disabled", false);
            buildParamsInput();
        }
    });

    $(".dashboardApplyParams").on("click", ()=> {
        const params = {};

        $(".dashboardApplyInputFields [data-paramId]").each((index, item)=> {
            const target = $(item)
            params[target.attr("data-paramId")] = target.val().indexOf("[") > -1 ? JSON.parse(target.val()) : [target.val()];
        });

        $(".dashboardApplyParams").prop("disabled", true);

        dashboard.params(params).run()
            .fail((err)=>{
                alert(err)
            })
            .always(()=> { $(".dashboardApplyParams").prop("disabled", false); });
    });
};