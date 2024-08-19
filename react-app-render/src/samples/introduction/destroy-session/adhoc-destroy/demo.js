export const viz = (v) => {
    //render initial view
    const adv = v.adhocView({
      resource: "/public/viz/Adhoc/Chart3",
      container: "#adhocDestroySession"
    });

    //destroy method
    document.getElementById("adhocDestroyBtn").addEventListener('click', () => {
        adv.destroy().done( ()=> {
            console.log("Table was destroyed");
        }).fail(()=> {
            console.log("Table could not be destroyed:  " + arguments);
        });
    })
};
