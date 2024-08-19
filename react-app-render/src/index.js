import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { adhocConfig } from './config/adhocView-samples-config'
import {dashboardConfig} from './config/dashboard-samples-config';
import { reportConfig } from './config/report-samples-config';
import {inputControlsConfig} from "./config/inputControls-samples-config";
import { repositoryConfig } from './config/repository-samples-config';
import {authConfig} from "./config/auth-samples-config";
import externalLinks from "./externalLinks";
import {
    adhocPageStart,
    reportPageStart,
    dashboardPageStart,
    inputControlPageStart,
    introductionPageStart,
    repoPageStart
} from "./samplesConstants";

externalLinks.loadJquery()
const lastPartOfUrl = window.location.href.split('/').pop();

if(lastPartOfUrl.startsWith(adhocPageStart)) {
    adhocConfig.map((config) => {
        const {id, ...rest} = config;
        ReactDOM.render(<App {...rest}/>,document.getElementById(id));
    })
} else if(lastPartOfUrl.startsWith(reportPageStart)) {
    externalLinks.loadUnderscore()
    reportConfig.map((config) => {
        const {id, ...rest} = config
        ReactDOM.render(<App {...rest}/>,document.getElementById(id));
    })
} else if(lastPartOfUrl.startsWith(dashboardPageStart)) {
    dashboardConfig.map((config) => {
        const {id, ...rest} = config;
        ReactDOM.render(<App {...rest}/>,document.getElementById(id));
    })
} else if(lastPartOfUrl.startsWith(repoPageStart)) {
    repositoryConfig.map((config) => {
        const {id, ...rest} = config;
        ReactDOM.render(<App {...rest}/>,document.getElementById(id));
    })
}else if(lastPartOfUrl.startsWith(inputControlPageStart)) {
    inputControlsConfig.map((config) => {
        const {id, ...rest} = config;
        ReactDOM.render(<App {...rest}/>,document.getElementById(id));
    })
}else if(lastPartOfUrl.startsWith(introductionPageStart)) {
    authConfig.map((config) => {
        const {id, ...rest} = config;
        rest.isIntroPage = true
        ReactDOM.render(<App {...rest}/>,document.getElementById(id));
    })
}