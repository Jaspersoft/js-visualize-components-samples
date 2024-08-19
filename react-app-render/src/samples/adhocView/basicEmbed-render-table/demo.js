export const viz = (v) => {
   v.adhocView({
      resource: "/public/viz/Adhoc/Table1",
      container: "#renderTable",
      error: (e) => {
        console.log(e);
      }
});}
