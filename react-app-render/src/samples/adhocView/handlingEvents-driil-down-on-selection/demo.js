export const viz = (v) => {
    let first
    const renderView = () => {
        $("#drilldownBackButton").hide();
        first = v.adhocView({
          resource: "/public/viz/Adhoc/Store_Sales3",
          container: "#drilldownContainer",
          linkOptions: {
            events: {
              click: (ev, data) => {
                console.log(data);
                const measureSelected = data.Measures;
                const categorySelected = data.product_category;
                $("#drilldownField").html("<span>Field: <b>" + data.product_category + "</b></span>")
                updateView(measureSelected, categorySelected)
              }
            }
          },
          success: () => {
              $("#drilldownContainer").siblings('.AddNode').remove();
              console.log("Available filters")
              console.log(first.data().metadata.inputParameters);
          },
          error: (e) => {
            console.log(e);
          }
        });
      }
      renderView()

    const updateView = (measure, category) => {
        const showCostView = "/public/viz/Adhoc/Store_Cost4";
        const showSalesView = "/public/viz/Adhoc/Store_Sales4";

        $("#drilldownBackButton").show();
        if (measure[0] === "store_cost") {

            $("#drilldownMeasure").html("<span>Measure: <b>Store Cost</b></span>")
            v.adhocView({
                resource: showCostView,
                container: "#drilldownContainer",
                params: {
                    product_category_1: [category]
                },
                error: (e) => {
                    console.log(e);
                }
            });

        } else {
            $("#drilldownMeasure").html("<span>Measure: <b>Store Sales</b></span>")
            v.adhocView({
                resource: showSalesView,
                container: "#drilldownContainer",
                params: {
                    product_category_1: [category]
                },
                error: (e) => {
                    console.log(e);
                }
            });
            }
        }

        const goBack =() => {
          let doIt = () => {
              renderView()
          }
          $("input[name='goBack']").click(doIt);
      }

      goBack()
}
