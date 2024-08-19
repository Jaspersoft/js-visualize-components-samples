export const authHtmlConfig = {
    reportPlainTextCred:
        '<!--Provide container to render your visualization-->\n' +
        '<div id="reportPlainText"><div class="loader"><p>Loading...</p></div></div>',

    reportSSOToken:
        '<!--Provide container to render your visualization-->\n' +
        '<div id="reportToken"><div class="loader"><p>Loading...</p></div></div>',

    reportPreAuthToken:
        '<!--Provide container to render your visualization-->\n' +
        '<div id="reportPreAuthToken"><div class="loader"><p>Loading...</p></div></div>',

    reportLoginHook:
        '<!--Provide container to render your visualization-->\n' +
        '<div id="reportLogin"><div class="loader"><p>Loading...</p></div></div>',
    userLocale: 
        '<!--Provide container to render your visualization-->\n' +
        '<label class="control select" for="userLocale">\n' +
        '  <span class="wrap">Locale:</span>\n' +
        '  <select id="userLocale" name="userLocale">\n' +
        '        <option value="en" selected="">en</option>\n' +
        '        <option value="de">de</option>\n' +
        '        <option value="es">es</option>\n' +
        '        <option value="fr">fr</option>\n' +
        '        <option value="it">it</option>\n' +
        '        <option value="ja">ja</option>\n' +
        '        <option value="pt_BR">pt_BR</option>\n' +
        '        <option value="zh_CN">zh_CN</option>\n' +
        '    </select>\n' +
        '</label>\n' +
        '\n' +
        '<!--Provide container to render your visualization-->\n' +
        '<div id="changeLocale"><div class="loader"><p>Loading...</p></div></div>',
    adhocRefreshSession:'<button id="adocRefreshSessionBtn" class="refresh">Refresh</button>\n' +
        '\n' +
        '<!--Provide container to render your visualization-->\n' +
        '<div id="adocRefreshSession"><div class="loader"><p>Loading...</p></div></div>',

    adhocDestroySession:'<button id="adhocDestroyBtn" class="destroy">Destroy</button>\n' +
        '\n' +
        '<!--Provide container to render your visualization-->\n' +
        '<div id="adhocDestroySession"><div class="loader"><p>Loading...</p></div></div>',

    reportLogout:'<div>\n' +
        '    <label class="control input text hidden" accesskey="o" for="orgId">\n' +
        '        <span class="wrap">Organization :</span>\n' +
        '        <input id="orgId" name="orgId" type="text" autocapitalize="off"/>\n' +
        '    </label>\n' +
        '            \n' +
        '    <label class="control input text" for="j_username">\n' +
        '        <span class="wrap">User ID:</span>\n' +
        '        <input id="j_username" name="j_username" type="text" autocapitalize="off"/>\n' +
        '    </label>\n' +
        '    \n' +
        '    <label class="control input password" for="j_password">\n' +
        '        <span class="wrap">Password:</span>\n' +
        '        <input class="" id="j_password" name="j_password" type="password"/>\n' +
        '    </label>\n' +
        '    \n' +
        '    <div style="font-size: 8pt">Sample login - Organization: organization_1, User ID: joeuser, Password: joeuser</div>\n' +
        '    \n' +
        '    <label class="control select" for="userLocale">\n' +
        '\t    <span class="wrap">Locale:</span>\n' +
        '\t    <select id="userLocale" name="userLocale">\n' +
        '            <option value="en" selected="">en</option>\n' +
        '            <option value="de">de</option>\n' +
        '            <option value="es">es</option>\n' +
        '            <option value="fr">fr</option>\n' +
        '            <option value="it">it</option>\n' +
        '            <option value="ja">ja</option>\n' +
        '            <option value="pt_BR">pt_BR</option>\n' +
        '            <option value="zh_CN">zh_CN</option>\n' +
        '        </select>\n' +
        '\t</label>\n' +
        '    \n' +
        '\t<label class="control select" for="userTimezone">Time Zone:\n' +
        '\t    <select id="userTimezone" name="userTimezone">\n' +
        '            <option value="Europe/Helsinki" selected="">Europe/Helsinki - Eastern European Time</option>\n' +
        '            <option value="America/Los_Angeles">America/Los_Angeles - Pacific Standard Time</option>\n' +
        '            <option value="America/Denver">America/Denver - Mountain Standard Time</option>\n' +
        '            <option value="America/Chicago">America/Chicago - Central Standard Time</option>\n' +
        '            <option value="America/New_York">America/New_York - Eastern Standard Time</option>\n' +
        '            <option value="Europe/London">Europe/London - Greenwich Mean Time</option>\n' +
        '            <option value="Europe/Berlin">Europe/Berlin - Central European Time</option>\n' +
        '            <option value="Europe/Bucharest">Europe/Bucharest - Eastern European Time</option>\n' +
        '        </select>\n' +
        '\t</label>\n' +
        '    <button id="report-logout-login-btn">Login</button>\n' +
        '    <button id="report-logout-btn">Logout</button>\n' +
        '    <span class="logout-message error">Authentication Error</span>\n' +
        '    <span class="logout-message success">Logged in</span>\n' +
        '    <span class="logout-message logout">Logged out</span>\n' +
        '</div>\n' +
        '<select id="report-logout-selected_resource" disabled="false" name="report">\n' +
        '\t<option value="/public/Samples/Reports/AllAccounts">All Accounts (light)</option>\n' +
        '\t<option value="/public/Samples/Reports/5g.AccountsReport">All Accounts (dark)</option>\n' +
        '\t<option value="/public/Samples/Reports/SalesByMonthReport">Sales By Month Report (light)</option>\n' +
        '\t<option value="/public/Samples/Reports/11g.SalesByMonthReport">Sales By Month Report (dark)</option>\n' +
        '\t<option value="/public/Samples/Reports/ProfitDetailReport">Profit Detail Report (light)</option>\n' +
        '\t<option value="/public/Samples/Reports/06g.ProfitDetailReport">Profit Detail Report (dark)</option>\n' +
        '\t<option value="/public/Samples/Reports/9.CustomerDetailReport">Customer Detail Report (light)</option>\n' +
        '\t<option value="/public/Samples/Reports/9g.CustomerDetailReport">Customer Detail Report (dark)</option>\n' +
        '\t<option value="/public/Samples/Reports/State_Performance">Performance by Store Type (light) </option>\n' +
        '\t<option value="/public/Samples/Reports/10g.PerformanceByStoreType">Performance By Store Type (dark) </option>\n' +
        '\t<option value="/public/Samples/Reports/14.PerformanceSummary">Performance Summary</option>\n' +
        '</select>\n' +
        '<!--Provide container to render your visualization-->\n' +
        '<div id="reportLogout"><div class="loader"><p>Loading...</p></div></div>',
    dashLogout:'<button id="dashbordDestroyedButton">Logout</button>\n' +
        '\n' +
        '<div id="dashboardAuth">\n'+
        '   <div class="loader"><p>Loading...</p></div>\n' +
        '</div>'
}