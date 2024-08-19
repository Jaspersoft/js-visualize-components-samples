/*
 * Copyright (C) 2005 - 2020 TIBCO Software Inc. All rights reserved. Confidentiality & Proprietary.
 * Licensed pursuant to commercial TIBCO End User License Agreement.
 */
const externalLinks = {
    openFiddle(props) {
        const form = document.createElement('form');
        const formAction = `${window.location.protocol}//jsfiddle.net/api/post/library/pure/`;

        const htmlContent = document.createElement('textarea');
        const jsContent = document.createElement('textarea');
        const cssContent = document.createElement('textarea');

        form.style.display = 'none'
        form.setAttribute('method', 'post');
        form.setAttribute('action', formAction);
        form.setAttribute('target', 'check');

        htmlContent.setAttribute('name', 'html');
        htmlContent.innerHTML=props.htmlContent;

        jsContent.setAttribute('name', 'js');
        jsContent.innerHTML=props.contentType=== 'react' ? props.reactContent : props.jsContent;

        cssContent.setAttribute('name', 'css');
        cssContent.innerHTML=props.cssContent;

        if(props.contentType=== 'react') {
            const panel_js = document.createElement('textarea');
            panel_js.setAttribute('name', 'panel_js')
            panel_js.innerHTML=7 // for react
            form.appendChild(panel_js);
        }

        form.appendChild(htmlContent);
        form.appendChild(jsContent);
        form.appendChild(cssContent);
        document.body.appendChild(form);
        form.submit();
        document.body.removeChild(form);
    },
    copyCode(props) {
            const textContent = props[`${props.contentType}Content`];
          const el = document.createElement('textarea');
          el.value = textContent;
          document.body.appendChild(el);
          el.select();
          document.execCommand('copy');
          document.body.removeChild(el);
      },
    loadJquery() {
        const script = document.createElement("script");
        script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
        script.crossOrigin="anonymous"
        script.integrity = "sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
        script.async = true;
        document.body.appendChild(script);
    },
    loadUnderscore() {
        const script = document.createElement("script");
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.13.4/underscore-min.js";
        script.crossOrigin="anonymous"
        script.integrity = "sha512-uLKRd6hCNYAENFn2h7w0p5hrUAz21bAu/85eqSqmQ1Y565lFInwRga9Lgk+QAAR9QvNfSlZjnEb+HHfzkAC/8Q=="
        script.referrerPolicy = "no-referrer";
        document.body.appendChild(script);
    }
};
export default externalLinks;
