let inputControls = "";

export const viz=(v)=> {
   inputControls= v.inputControls({
       resource: "/public/Samples/Reports/ProfitDetailReport",
        container: "#containerInput",
        error: (err) =>{
          console.error(err);
        },
        success: (data) =>{
          console.log(data)
        },
        events: {
        change: (data)=> {
            console.log("change: ", data)
        }
        }
   });

    $("#validate").click(()=>{
        inputControls.validate();
        }
    );

    $("#getParams").click(()=>{
        console.log(inputControls.params());
        }
    );
    $("#run").click(()=>{
            console.log(inputControls.data().parameters)
        inputControls.run(null, (e)=> {
        console.log(e)
        });
        }
    );

    $("#reset").click(()=>{
        console.log("Params before reset: ", inputControls.params())
          inputControls.reset(()=> {
            console.log("Params after: ", inputControls.params())
          }, (e)=> {
            console.log(e)
          });
        }
      );
};