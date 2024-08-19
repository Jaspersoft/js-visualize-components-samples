export const viz = (v) => {
  v("#crosstabWithCss").adhocView({
    resource: "/public/viz/Adhoc/Crosstab3",
    error: (e) => {
      	console.log(e);
    }
  });
}
