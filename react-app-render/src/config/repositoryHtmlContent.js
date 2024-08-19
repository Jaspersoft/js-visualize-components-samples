export const repoHtmlConfig = {
    listByResourceType: '<label for="resourceType">Resource Type: </label>\n' +
        '<select name="resourceType" id="dataResourceType" disabled>\n' +
        '    <option label="reportUnit">reportUnit</option>\n' +
        '    <option label="folder">folder</option>\n' +
        '    <option label="dataType">dataType</option>\n' +
        '    <option label="jdbcDataSource">jdbcDataSource</option>\n' +
        '    <option label="awsDataSource">awsDataSource</option>\n' +
        '    <option label="jndiJdbcDataSource">jndiJdbcDataSource</option>\n' +
        '    <option label="virtualDataSource">virtualDataSource</option>\n' +
        '    <option label="customDataSource">customDataSource</option>\n' +
        '    <option label="beanDataSource">beanDataSource</option>\n' +
        '    <option label="xmlaConnection">xmlaConnection</option>\n' +
        '    <option label="listOfValues">listOfValues</option>\n' +
        '    <option label="file">file</option>\n' +
        '    <option label="reportOptions">reportOptions</option>\n' +
        '    <option label="dashboard">dashboard</option>\n' +
        '    <option label="adhocDataView">adhocDataView</option>\n' +
        '    <option label="query">query</option>\n' +
        '    <option label="olapUnit">olapUnit</option>\n' +
        '    <option label="reportUnit">reportUnit</option>\n' +
        '    <option label="domainTopic">domainTopic</option>\n' +
        '    <option label="semanticLayerDataSource">semanticLayerDataSource</option>\n' +
        '    <option label="secureMondrianConnection">secureMondrianConnection</option>\n' +
        '    <option label="mondrianXmlaDefinition">mondrianXmlaDefinition</option>\n' +
        '    <option label="mondrianConnection">mondrianConnection</option>\n' +
        '    <option label="inputControl">inputControl</option>\n' +
        '</select>\n' +
        '<div class="resource-type-datagrid">\n' +
        '    <table>\n' +
        '        <thead>\n' +
        '        <tr>\n' +
        '            <th>Label</th>\n' +
        '            <th>URI of resource</th>\n' +
        '            <th>Type</th>\n' +
        '            <th>Created</th>\n' +
        '        </tr>\n' +
        '        </thead>\n' +
        '        <tbody id="ResultsTableContentResourceType">\n' +
        '        <tr>\n' +
        '            <td>data</td>\n' +
        '            <td>data</td>\n' +
        '            <td>data</td>\n' +
        '            <td>data</td>\n' +
        '        </tr>\n' +
        '        <tr>\n' +
        '            <td>data</td>\n' +
        '            <td>data</td>\n' +
        '            <td>data</td>\n' +
        '            <td>data</td>\n' +
        '        </tr>\n' +
        '        <tr>\n' +
        '            <td>data</td>\n' +
        '            <td>data</td>\n' +
        '            <td>data</td>\n' +
        '            <td>data</td>\n' +
        '        </tr>\n' +
        '        <tr>\n' +
        '            <td>data</td>\n' +
        '            <td>data</td>\n' +
        '            <td>data</td>\n' +
        '            <td>data</td>\n' +
        '        </tr>\n' +
        '        </tbody>\n' +
        '    </table>\n' +
        '</div>',
    sorting: '<label for="sortBy">Sort By: </label>\n' +
        '<select name="sortBy" id="sortBy" class="sort" disabled>\n' +
        '    <option label="label">label</option>\n' +
        '    <option label="uri">uri</option>\n' +
        '    <option label="description">description</option>\n' +
        '    <option label="type">type</option>\n' +
        '    <option label="creationDate">creationDate</option>\n' +
        '    <option label="updateDate">updateDate</option>\n' +
        '    <option label="accessTime">accessTime</option>\n' +
        '    <option label="popularity">popularity</option>\n' +
        '</select>\n' +
        '<div class="sorting-datagrid">\n' +
        '    <table>\n' +
        '        <thead>\n' +
        '        <tr>\n' +
        '            <th>Label</th>\n' +
        '            <th>URI of resource</th>\n' +
        '            <th>Type</th>\n' +
        '            <th>Created</th>\n' +
        '        </tr>\n' +
        '        </thead>\n' +
        '        <tbody id="ResultsTableContentForSort">\n' +
        '        <tr>\n' +
        '            <td>data</td>\n' +
        '            <td>data</td>\n' +
        '            <td>data</td>\n' +
        '            <td>data</td>\n' +
        '        </tr>\n' +
        '        <tr>\n' +
        '            <td>data</td>\n' +
        '            <td>data</td>\n' +
        '            <td>data</td>\n' +
        '            <td>data</td>\n' +
        '        </tr>\n' +
        '        <tr>\n' +
        '            <td>data</td>\n' +
        '            <td>data</td>\n' +
        '            <td>data</td>\n' +
        '            <td>data</td>\n' +
        '        </tr>\n' +
        '        <tr>\n' +
        '            <td>data</td>\n' +
        '            <td>data</td>\n' +
        '            <td>data</td>\n' +
        '            <td>data</td>\n' +
        '        </tr>\n' +
        '        </tbody>\n' +
        '    </table>\n' +
        '</div>',
    searchByAccessType: '<label class="access-label">Access Type: </label>\n' +
        '<select name="accessType" id="accessType" disabled>\n' +
        '    <option label="viewed">viewed</option>\n' +
        '    <option label="modified">modified</option>\n' +
        '</select>\n' +
        '\n' +
        '<div class="search-by-access-datagrid">\n' +
        '  <table>\n' +
        '    <thead>\n' +
        '      <tr>\n' +
        '        <th>Label</th>\n' +
        '        <th>URI of resource</th>\n' +
        '        <th>Type</th>\n' +
        '        <th>Created</th>\n' +
        '      </tr>\n' +
        '    </thead>\n' +
        '    <tbody id="ResultsTableContent">\n' +
        '      <tr>\n' +
        '        <td>data</td>\n' +
        '        <td>data</td>\n' +
        '        <td>data</td>\n' +
        '        <td>data</td>\n' +
        '      </tr>\n' +
        '      <tr>\n' +
        '        <td>data</td>\n' +
        '        <td>data</td>\n' +
        '        <td>data</td>\n' +
        '        <td>data</td>\n' +
        '      </tr>\n' +
        '      <tr>\n' +
        '        <td>data</td>\n' +
        '        <td>data</td>\n' +
        '        <td>data</td>\n' +
        '        <td>data</td>\n' +
        '      </tr>\n' +
        '      <tr>\n' +
        '        <td>data</td>\n' +
        '        <td>data</td>\n' +
        '        <td>data</td>\n' +
        '        <td>data</td>\n' +
        '      </tr>\n' +
        '    </tbody>\n' +
        '  </table>\n' +
        '</div>',

}