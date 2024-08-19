/*
 * Copyright (C) 2005 - 2020 TIBCO Software Inc. All rights reserved. Confidentiality & Proprietary.
 * Licensed pursuant to commercial TIBCO End User License Agreement.
 */
const internalLinks = {
    loadVisualizeAuthentication() {
        visualize.config({
            auth: {
                name: "joeuser",
                password: "joeuser",
                organization: "organization_1"
            }
        })
    },
    loadStyles(cssStr) {
        const style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = cssStr;
        document.body.appendChild(style);
    }
}

export default internalLinks