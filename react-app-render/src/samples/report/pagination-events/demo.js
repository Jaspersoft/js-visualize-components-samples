export const viz = (v) => {

    const checkPagesConditions = () => {
        $("#paginationEventCurrentPage").val(currentPage);
        $("#paginationEventPreviousPage").prop("disabled", currentPage === 1);
        $("#paginationEventNextPage").prop("disabled", currentPage === totalPages);
    }

    let currentPage = 1,
        totalPages,
        report = v.report({
            resource: "/public/Samples/Reports/AllAccounts",
            container: "#reportEvents",
            events: {
                changePagesState: function(page) {
                    currentPage = page;
                    checkPagesConditions();
                },
                changeTotalPages: function(pages) {
                    totalPages = pages;
                    checkPagesConditions();
                }
            }
        });

    $("#paginationEventCurrentPage").on("change", (evt) => {
        const value = parseInt($(evt.target).val(), 10);
        
        if (!isNaN(value) && value >= 1 && value <= totalPages) {
            currentPage = value;

            report
			    .pages(currentPage)
    			.run()
                    .done(checkPagesConditions)
		    		.fail((err) => { alert(err); });
        }       
	});
	
    $("#paginationEventPreviousPage").on("click", () => {
        report
			.pages(--currentPage)
			.run()
                .done(checkPagesConditions)
				.fail((err) => { alert(err); });
	});

	$("#paginationEventNextPage").on("click", () => {
        report
			.pages(++currentPage)
			.run()
                .done(checkPagesConditions)
                .fail((err) => { alert(err); });
	});

}