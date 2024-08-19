import { viz as repoListByResourceTypeViz } from '../samples/repository/repository-data-resource-type/demo'
import repoListByResourceTypeStyles from '../samples/repository/repository-data-resource-type/demo.css'
import { viz as repoSortingViz } from '../samples/repository/repository-sorting/demo'
import repoSortingStyles from '../samples/repository/repository-sorting/demo.css'
import { viz as repoFilteringSearchTypeViz } from '../samples/repository/repository-filtering-search-access-type/demo'
import repoFilteringSearchTypeStyles from '../samples/repository/repository-filtering-search-access-type/demo.css'
import { repoHtmlConfig } from './repositoryHtmlContent'
import { convertToString , authString} from '../utils/common.utils'

export const repositoryConfig = [
    {
        id: 'repo-resourceType-container',
        jsContent: `visualize(${authString} ${convertToString(repoListByResourceTypeViz)})`,
        cssContent: `${repoListByResourceTypeStyles}`,
        htmlContent: repoHtmlConfig.listByResourceType,
        containerId: 'ResultsTableContentResourceType',
        onPreviewClick: () => { visualize(repoListByResourceTypeViz)}
    },
    {
        id: 'repo-sorting-container',
        jsContent: `visualize(${authString} ${convertToString(repoSortingViz)})`,
        cssContent: `${repoSortingStyles}`,
        htmlContent: repoHtmlConfig.sorting,
        containerId: 'ResultsTableContentForSort',
        onPreviewClick: () => { visualize(repoSortingViz)}
    },
    {
        id: 'repo-searchByAccessType-container',
        jsContent: `visualize(${authString} ${convertToString(repoFilteringSearchTypeViz)})`,
        cssContent: `${repoFilteringSearchTypeStyles}`,
        htmlContent: repoHtmlConfig.searchByAccessType,
        containerId: 'ResultsSearchAccessType',
        onPreviewClick: () => { visualize(repoFilteringSearchTypeViz)}
    }
]