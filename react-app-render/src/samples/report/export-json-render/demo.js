export const viz= (v) => {
        const cleanAxis = (axis, oneInEvery)=> {
            // This should have been called after draw, otherwise do nothing
            if (axis.shapes.length > 0) {
                // Leave the first label
                let del = false;
                // If there is an interval set
                if (oneInEvery > 1) {
                    // Operate on all the axis text
                    axis.shapes.selectAll("text")
                        .each(function (d) {
                            // Remove all but the nth label
                            if (del % oneInEvery !== 0) {
                                this.remove();
                                // Find the corresponding tick line and remove
                                axis.shapes.selectAll("line").each(function (d2) {
                                    if (d === d2) {
                                        this.remove();
                                    }
                                });
                            }
                            del += 1;
                        });
                }
            }
        };
        const drawD3Chart =(data)=> {
            const width = 1100,
                height = 700;
            const svg = dimple.newSvg("#jsonExport", width, height);

            const myChart = new dimple.chart(svg, data);
            myChart.setBounds(75, 30, width-90, height-70);

            myChart.addMeasureAxis("x", "store_cost");

            const yAxis = myChart.addCategoryAxis("y", "store_sales");

            const zAxis = myChart.addMeasureAxis("z", "unit_sales");
            zAxis.overrideMax = 400;

            myChart.addSeries("recyclable", dimple.plot.bubble);

            myChart.addLegend(180, 10, 360, 20, "right");
            myChart.draw();

            cleanAxis(yAxis, 30)

        }
        const parseData=(data)=> {
            //console.log("result: ", data)

            drawD3Chart(data);
        }
        const errorHandler=(error) =>{
            console.log(error);
        }
        const exportJson= (report) =>{
            report.export({
                outputFormat: "json",
                //pages: "1-5"
            }, (link, request)=> {
                request({
                    dataType: "json"
                })
                    .done(parseData)
                    .fail(errorHandler);

            }, errorHandler);
            //Remove custom loading indicator once data has successfully loaded
            document.getElementById("exportLoader").style.display = "none";
            //Add indicator for D3 build
            document.getElementById("build").style.display = "inline";
        };
        const report = v.report({
            resource: "/public/viz/04._Product_Results_by_Store_Type_Report",
            success: success,
            error: errorHandler
        });
        function success() {
            exportJson(report)
        }
};












