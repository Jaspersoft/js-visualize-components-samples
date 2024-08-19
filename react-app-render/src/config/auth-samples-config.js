import {viz as authReportLoginHookScript} from '../samples/introduction/auth-options/report-login-hook/demo';
import authReportLoginHookStyle from '../samples/introduction/auth-options/report-login-hook/demo.css';
import {viz as authReportPlainTextCredScript} from '../samples/introduction/auth-options/report-plain-text-credentials/demo';
import authReportPlainTextCredStyle from '../samples/introduction/auth-options/report-plain-text-credentials/demo.css';
import {viz as authReportSSOTokenScript} from '../samples/introduction/auth-options/sso-token/report-token-auth/demo';
import authReportSSOTokenStyle from '../samples/introduction/auth-options/sso-token/report-token-auth/demo.css';
import {viz as authReportPreAuthTokenScript} from '../samples/introduction/auth-options/pre-auth/demo';
import authReportPreAuthTokenStyle from '../samples/introduction/auth-options/pre-auth/demo.css';
import {viz as authAdhocDestroySessionScript} from '../samples/introduction/destroy-session/adhoc-destroy/demo';
import authAdhocDestroySessionStyle from '../samples/introduction/destroy-session/adhoc-destroy/demo.css';
import {viz as authDashboardLogoutScript} from '../samples/introduction/logout/dash-auth-logout/demo';
import authDashboardLogoutStyle from '../samples/introduction/logout/dash-auth-logout/demo.css';
import {viz as authReportLogoutScript } from '../samples/introduction/logout/report-auth-logout/demo';
import  authReportLogoutStyle from '../samples/introduction/logout/report-auth-logout/demo.css';
import { viz as authAdhocRefreshSessionScript} from '../samples/introduction/refresh-session/adhoc-refresh/demo';
import authAdhocRefreshSessionStyle from '../samples/introduction/refresh-session/adhoc-refresh/demo.css';
import { viz as authChangeUserLocaleScript} from '../samples/introduction/change-user-locale/demo';
import authChangeUserLocaleStyle from '../samples/introduction/change-user-locale/demo.css';

import {authHtmlConfig} from "./authHtmlContent";
import {authString, authErrorHandlerString, convertToString} from "../utils/common.utils";

const getFunctionBodyPart = (stringToConvert) => {
    return stringToConvert.substring(stringToConvert.indexOf('{') + 1, stringToConvert.lastIndexOf('}'));
}

export const authConfig = [
    {
        id: 'auth-plain-text-cred-container',
        jsContent: `visualize(${authString} ${convertToString(authReportPlainTextCredScript)}${authErrorHandlerString})`,
        cssContent: `${authReportPlainTextCredStyle}`,
        htmlContent: authHtmlConfig.reportPlainTextCred,
        onPreviewClick: () => { visualize(authReportPlainTextCredScript)},
        containerId: 'reportPlainText'
    },
    {
        id: 'auth-report-sso-container',
        jsContent: getFunctionBodyPart(convertToString(authReportSSOTokenScript)),
        reAuthrequiredAfterIt: true,
        cssContent: `${authReportSSOTokenStyle}`,
        htmlContent: authHtmlConfig.reportSSOToken,
        onPreviewClick: () => { authReportSSOTokenScript()},
        containerId: 'reportToken',
    },
    {
        id: 'auth-pre-auth-container',
        jsContent: getFunctionBodyPart(convertToString(authReportPreAuthTokenScript)),
        reAuthrequiredAfterIt: true,
        cssContent: `${authReportPreAuthTokenStyle}`,
        htmlContent: authHtmlConfig.reportPreAuthToken,
        onPreviewClick: () => { authReportPreAuthTokenScript()},
        containerId: 'reportPreAuthToken',
    },
    {
        id: 'auth-report-login-hook-container',
        jsContent: getFunctionBodyPart(convertToString(authReportLoginHookScript)),
        reAuthrequiredAfterIt: true,
        cssContent: `${authReportLoginHookStyle}`,
        htmlContent: authHtmlConfig.reportLoginHook,
        onPreviewClick: () => {authReportLoginHookScript()},
        containerId: 'reportLogin',
    },
    {
        id: 'auth-change-locale-container',
        jsContent: getFunctionBodyPart(convertToString(authChangeUserLocaleScript)),
        reAuthrequiredAfterIt: true,
        cssContent: `${authChangeUserLocaleStyle}`,
        htmlContent: authHtmlConfig.userLocale,
        onPreviewClick: () => {authChangeUserLocaleScript()},
        containerId: 'changeLocale',
    },
    {
        id: 'auth-adhoc-refresh-session-container',
        jsContent: `visualize(${authString} ${convertToString(authAdhocRefreshSessionScript)})`,
        cssContent: `${authAdhocRefreshSessionStyle}`,
        htmlContent: authHtmlConfig.adhocRefreshSession,
        onPreviewClick: () => { visualize(authAdhocRefreshSessionScript)},
        containerId: 'adocRefreshSession'
    },
    {
        id: 'auth-adhoc-destroy-session-container',
        jsContent: `visualize(${authString} ${convertToString(authAdhocDestroySessionScript)})`,
        cssContent: `${authAdhocDestroySessionStyle}`,
        htmlContent: authHtmlConfig.adhocDestroySession,
        onPreviewClick: () => { visualize(authAdhocDestroySessionScript)},
        containerId: 'adhocDestroySession'
    },
    {
        id: 'auth-report-logout-container',
        jsContent: `visualize(${authString} ${convertToString(authReportLogoutScript)})`,
        cssContent: `${authReportLogoutStyle}`,
        htmlContent: authHtmlConfig.reportLogout,
        onPreviewClick: () => { visualize(authReportLogoutScript)},
        containerId: 'reportLogout'
    },
    {
        id: 'auth-dash-logout-container',
        jsContent: `visualize(${authString} ${convertToString(authDashboardLogoutScript)})`,
        cssContent: `${authDashboardLogoutStyle}`,
        htmlContent: authHtmlConfig.dashLogout,
        onPreviewClick: () => { visualize(authDashboardLogoutScript)},
        containerId: 'dashboardAuth'
    }];