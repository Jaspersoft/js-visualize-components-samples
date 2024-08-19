export const viz = (v) => {
    const updateViews = (measure, category) => {
        let showCostView = "/public/viz/Adhoc/Store_Cost4";
        let showSalesView = "/public/viz/Adhoc/Store_Sales4";

        if (measure[0] === "store_cost") {
            $("#measureNewView").html("<span>Measure: <b>Store Cost</b></span>")
            v.adhocView({
                resource: showCostView,
                container: "#secondContainerNewView",
                params: {
                    product_category_1: [category]
                },
                error: (e) => {
                    console.log(e);
                }
            });

        } else {
            $("#measureNewView").html("<span>Measure: <b>Store Sales</b></span>")
            v.adhocView({
                resource: showSalesView,
                container: "#secondContainerNewView",
                params: {
                    product_category_1: [category]
                },
                error: (e) => {
                    console.log(e);
                }
            });
        }
    }
  let first = v.adhocView({
    resource: "/public/viz/Adhoc/Store_Sales3",
    container: "#firstContainerNewView",
    linkOptions: {
      events: {
        click: (ev, data) => {
            console.log(data);
            const measureSelected = data.Measures;
            const categorySelected = data.product_category;
            $("#fieldNewView").html("<span>Field: <b>" + data.product_category + "</b></span>")
            updateViews(measureSelected, categorySelected)
        }
      }
    },
    success: () => {
        $("#firstContainerNewView").siblings('.AddNode').remove();
    	console.log("Available filters")
        console.log(first.data().metadata.inputParameters);
    },
    error: (e) => {
      console.log(e);
    }
  });
}
