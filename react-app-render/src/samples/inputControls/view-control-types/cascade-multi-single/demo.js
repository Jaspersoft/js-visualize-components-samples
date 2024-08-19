export const viz=(v)=> {
   v.inputControls({
        resource: "/organizations/organization_1/adhoc/topics/Cascading_multi_select_topic",
        container: "#containerInputMulti",
        error:  (err)=> {
            console.error(err);
        }
    });
};