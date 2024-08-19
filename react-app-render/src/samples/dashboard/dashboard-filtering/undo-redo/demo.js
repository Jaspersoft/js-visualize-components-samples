export const viz=(v)=> {
    const handleError=(e)=> {
        alert(e);
    }
    const buildParamsInput=()=> {
        const params = dashboard.data().parameters;

        for (let i = params.length - 1; i >= 0; i--) {
            const $el = $("<tr><td>" + params[i].id + "</td><td><input class='undoRedoInput' type='text' data-paramId='" + params[i].id + "'/></td></tr>");

            $("#dash-filter-params").append($el);

            $el.find("input").val(params[i].value);
        }
    }
    const dashboard = v.dashboard({
        resource: "/public/Samples/Dashboards/2._Performance_Summary_Dashboard",
        container: "#dashboardUndo",
        error: handleError,
        success:  ()=> {
            $("#dash-filter-apply").prop("disabled", false);
            buildParamsInput();
        },
        events: {
            canUndo:  (val) => {
                $("#dash-filter-undo").prop("disabled", !val);
                $("#dash-filter-undoAll").prop("disabled", !val);
            },
            canRedo:  (val) => {
                $("#dash-filter-redo").prop("disabled", !val);
            }
        }
    });

    $("#dash-filter-undo").on("click", ()=> {
    dashboard.undoParams().fail(handleError);
  });

  $("#dash-filter-undoAll").on("click", ()=> {
    dashboard.undoAllParams().fail(handleError);
  });

  $("#dash-filter-redo").on("click", ()=> {
    dashboard.redoParams().fail(handleError);
  });


  $("#dash-filter-apply").on("click", ()=> {
      const params = {};

      $(".undoRedoInput[data-paramId]").each((index, item)=> {
          const target = $(item)
      params[target.attr("data-paramId")] = target.val().indexOf("[") > -1 ? JSON.parse(target.val()) : [target.val()];
    });

    $("#dash-filter-apply").prop("disabled", true);

    dashboard.params(params).run()
      .fail(handleError)
      .always(function() {
        $("#dash-filter-apply").prop("disabled", false);
      });
  });
};
