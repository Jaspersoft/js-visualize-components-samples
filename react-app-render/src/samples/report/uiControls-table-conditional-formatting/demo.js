export const viz = (v) =>  {
    const printConditions = (component) => {
        console.log("Conditions: " , component.conditions);
    }, showError = (err) => {
        alert(err);
    }

    //discover name through JRXML (field name by default)
    let salesColumnName = "_detail_level__sales_fact_ALL.sales_fact_ALL__unit_sales_2013",
        report = v.report({
            resource: "/public/Samples/Reports/04._Product_Results_by_Store_Type_Report",
            container: "#reportTableFormatting",
            error: showError
        });
    
    $("#changeTableConditions").on("click", () => {
            report.updateComponent(salesColumnName, {
                conditions: [
                    {
                        operator: "greater",
                        value: 3,
                        backgroundColor: null,
                        font: {
                            color: "FF0000",
                            bold: true,
                            underline: true,
                            italic: true
                        }
                    },
                    {
                        operator: "between",
                        value: [5, 9],
                        backgroundColor: "00FF00",
                        font: {
                            color: "0000FF"
                        }
                    }
                ]
            })
            .then(printConditions)
            .fail(showError);
    });
}