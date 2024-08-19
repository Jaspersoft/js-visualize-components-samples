export const viz = (v) => {
  v.adhocView({
    resource: "/public/viz/Adhoc/Chart6",
    container: "#fieldsMeasures",
    error: (e) => {
      console.log(e);
    },
    //Use linkOptions to pass fields and measures 
    linkOptions: {
    	events: {
          click: (ev, data) => {
        	//view data for available fields and measures
        	console.log(data);
            $("#fieldsMeasuresFirstField").html("<span>Field1: <b>" + data.product_subcategory + "</b></span>")
            $("#fieldsMeasuresSecondField").html("<span>Field2: <b>" + data.the_date + "</b></span>")
        	$("#measure").html("<span>Measure: <b>" + data.Measures[0] + "</b></span>")
        }
      }
    },
    success: () => {
      $("#fieldsMeasures").siblings('.AddNode').remove()
    }
  });
}
