export const viz= (v) => {
  //render initial view
  const adv = v.adhocView({
      resource: "/public/viz/Adhoc/Chart3",
      container: "#adocRefreshSession"
  });

  //refresh method
  document.getElementById("adocRefreshSessionBtn").addEventListener('click', ()=> {
    adv.refresh().done(()=> {
      console.log("Table was refreshed");
    }).fail(()=> {
      console.log("Table could not be refreshed:  " + arguments);
    });
  })
};