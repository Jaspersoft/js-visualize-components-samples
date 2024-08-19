import React, {createRef, useEffect, useState} from 'react';
import AceEditor from 'react-ace';
import externalLinks from './externalLinks'
import internalLinks from './internalLinks'
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-tomorrow_night";
import * as ace from 'ace-builds/src-noconflict/ace';
import beautify from 'ace-builds/src-noconflict/ext-beautify';
import {
    aceEditorModes, d3Library,
    d3Script,
    dimpleLibrary,
    dimpleScript,
    jqueryLibrary,
    jqueryScript,
    mobiledemoScript,
    underscoreLibrary,
    underscoreScript
} from "./samplesConstants";
import {getReactContent} from "./utils/common.utils";

ace.config.set('basePath', './');
ace.config.set('modePath', './');
ace.config.set('themePath', './');

const addExternalLibrariesScript = (librariesArr) => {
    let libraries = ''
    const librariesScript = {
        [underscoreLibrary]: `${underscoreScript}\n`,
        [jqueryLibrary]: `${jqueryScript}\n`,
        [d3Library]: `${d3Script}\n`,
        [dimpleLibrary]: `${dimpleScript}\n`
    }
    librariesArr?.length && librariesArr?.forEach((item) => {
        if (librariesScript[item]) {
            libraries += librariesScript[item]
        }
    })
    return libraries
}

const App = ({jsContent, cssContent, htmlContent, containerId, onPreviewClick, extraLibrary, reAuthrequiredAfterIt, isIntroPage}) => {
    const htmlContaintWithScript = `${mobiledemoScript}${addExternalLibrariesScript(extraLibrary)}\n${htmlContent}`
    const [codeContent, setCodeContent] = useState(htmlContaintWithScript);
    const [contentType, setContentType] = useState('html');
    const reactContent = containerId ? getReactContent(containerId, jsContent) : "react";

    const ref = createRef();
    const editorRef = createRef();
    const aceEditorMode = aceEditorModes;
    useEffect(() => {
        if (contentType === 'preview' && !ref.current?.firstChild) {
            let previewContainer = document.createElement('div');
            previewContainer.innerHTML = htmlContent;
            ref.current?.append(previewContainer);
        }
    }, [ref]);

    useEffect(() => {
      beautify.beautify(editorRef.current.editor.session);
    }, [editorRef]);

    const onPreviewTabClick = () => {
        //load respective fiddle css
        internalLinks.loadStyles(cssContent);

        if (onPreviewClick) {
            if (isIntroPage) {
                if (window.reAuthrequiredAfterIt && !reAuthrequiredAfterIt) {
                    internalLinks.loadVisualizeAuthentication();
                }
                window.reAuthrequiredAfterIt = reAuthrequiredAfterIt;
            }
            onPreviewClick();
        }
    }

    const onTabChange = (e, content, type) => {
        let currentElement = e.currentTarget;
        let tablinks = currentElement.parentElement.getElementsByClassName('tablinks');
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].classList.remove("active");
        }
        currentElement.className += " active";
        setCodeContent(content);
        setContentType(type ? type : 'javascript');
        const siblingElement = currentElement.parentElement.nextElementSibling,
            firstChild = siblingElement.firstChild,
            lastChild = siblingElement.lastChild;
        if (type === 'preview') {
            onPreviewTabClick();
            firstChild.style.display = 'none';
            lastChild.style.display = 'block';
        } else {
            firstChild.style.display = 'block';
            lastChild.style.display = 'none';
        }
    };
    const properties = {
        htmlContent: htmlContaintWithScript, cssContent, jsContent, reactContent, contentType
    };
    return (
        <div className="paper">
            <ul className="tab">
                <li className="tablinks active" onClick={(e) => onTabChange(e, htmlContaintWithScript, 'html')}>HTML
                </li>
                <li className="tablinks " onClick={(e) => onTabChange(e, cssContent, 'css')}>CSS</li>
                <li className="tablinks " onClick={(e) => onTabChange(e, jsContent, 'js')}>JavaScript</li>
                <li className="tablinks" onClick={(e) => onTabChange(e, reactContent, 'react')}>React</li>
                <li className="tablinks" onClick={(e) => onTabChange(e, '', 'preview')}>Preview</li>
                <li className="tablinks" style={{float: 'right'}}>
                    <button className='open-fiddle' onClick={() => {
                        externalLinks.openFiddle({...properties, extraLibrary})
                    }}>Open in JSFiddle
                    </button>
                </li>
                {contentType !== 'preview' ? <li className="tablinks" style={{float: 'right'}}>
                    <button className='copy-code' onClick={() => {
                        externalLinks.copyCode({...properties})
                    }}>Copy Code
                    </button>
                </li> : null}
            </ul>

            <div className='main-container'>
                <div className='code-container'>
                        <pre className="code-snippet">
                             <AceEditor
                                 mode={aceEditorMode[contentType]}
                                 name="JS"
                                 theme="tomorrow_night"
                                 value={codeContent}
                                 width="100%"
                                 wrapEnabled
                                 readOnly
                                 showGutter={false}
                                 showPrintMargin={false}
                                 setOptions={{useWorker: false}}
                                 ref={editorRef}
                             />
                        </pre>
                </div>
                <div id="result" ref={ref} style={{display: 'none'}}></div>
            </div>
        </div>
    );
}

export default App;
