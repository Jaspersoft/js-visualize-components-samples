export const viz = (v) => {
    // handle bookmarks
    const handleBookmarks = (bookmarks, container) => {
        let li, ul = $("<ul/>");
        !container && $("#bookmarksContainer").empty();
        container = container || $("#bookmarksContainer");
        $.each(bookmarks, (i, bookmark) => {
            li = $("<li><span class='jr_bookmark' title='Anchor: " + bookmark.anchor + ", page: " +
                bookmark.page + "' data-anchor='" + bookmark.anchor + "' data-page='" + bookmark.page + "'>" + bookmark.anchor + "</span></li>");
            bookmark.bookmarks && handleBookmarks(bookmark.bookmarks, li);
            ul.append(li);
        });
        container.append(ul);
    }

    //show error
    const handleError = (err) => {
        alert(err.message);
    }

    //render report from provided resource
    const report = v.report({
        resource: "/public/Samples/Reports/AllAccounts",

        error: handleError,
        container: "#bookmarkReportcontainer",
        events: {
            bookmarksReady: handleBookmarks
        }
    });

    $("#bookmarksContainer").on("click", ".jr_bookmark", () => {
        report.pages({
            anchor: $(evt.target).data("anchor")
        }).run();
    });

}