export const viz = (v) => {
  v("#chartWithSelectors").adhocView({
    resource: "/public/viz/Adhoc/Change_Visualization1",
    error: (e) => {
      	console.log(e);
    }
  });
}
