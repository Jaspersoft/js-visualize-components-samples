export const viz = (v) => {
    const filterSelect =  document.getElementById('adv-filtering-param'),
        runAdhocWithParam = (param) => {
            filterSelect.disabled= true
            ahv.params({ sales__store__region__sales_country_1: [param]}).run().then(()=> {
                filterSelect.disabled= false
            }).fail(() => {
                filterSelect.disabled= false
            })
        }

    const ahv = v.adhocView({
        resource: "/public/Samples/Ad_Hoc_Views/04__Product_Results_by_Store_Type",
        container: "#filteringParameter",
        error: (e) => {
            alert(e);
        },
        params: {
            sales__store__region__sales_country_1: ["USA", "Mexico", "Canada", "No Country"]
        },
        success: () => {
            // read current paramter/filter names
            let currentFilters = ahv.data().metadata.inputParameters;
            console.log(currentFilters)
            runAdhocWithParam("Canada")
            document.getElementById('adv-filtering-param').addEventListener('change', (evt) => {
                runAdhocWithParam(evt.target.value)
            })
        }
    })
}
