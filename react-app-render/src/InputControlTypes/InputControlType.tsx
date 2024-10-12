import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-tomorrow_night";
// import * as ace from 'ace-builds/src-noconflict/ace';
import beautify from 'ace-builds/src-noconflict/ext-beautify';
import {createRef, useEffect, useState} from "react";
import {aceEditorModes} from "../constants/liveSamplesConstants.ts";

const InputControlType = (props: any) => {
    const jsContent = props.jsContent;
    const [contentType] = useState('js');
    const [codeContent] = useState(jsContent);
    const ref = createRef<any>();
    const editorRef = createRef<any>();

    useEffect(() => {
        if (contentType === 'preview' && !ref.current?.firstChild) {
            let previewContainer = document.createElement('div');
            previewContainer.innerHTML = jsContent;
            ref.current?.append(previewContainer);
        }
    }, [ref])

    useEffect(() => {
        beautify.beautify(editorRef.current.editor.session);
    }, [editorRef]);


    return (<>
        <div className="paper">
            <h3>{props.title||""}</h3>
            <ul className="tab">
                <li className="tablinks ">JavaScript</li>
                <li className="tablinks">React</li>
                <li className="tablinks">Preview</li>
                <li className="tablinks" style={{float: 'right'}}>
                    {/*<button className='open-fiddle' onClick={() => {*/}
                    {/*    externalLinks.openFiddle({...properties, extraLibrary})*/}
                    {/*}}>Open in JSFiddle*/}
                    {/*</button>*/}
                </li>
                {contentType !== 'preview' ? <li className="tablinks" style={{float: 'right'}}>
                    <button className='copy-code'>Copy Code</button>
                </li> : null}
            </ul>

            <div className='main-container'>
                <div className='code-container'>
                        <pre className="code-snippet">
                             <AceEditor
                                 mode={aceEditorModes[contentType]}
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
    </>);
}

export default InputControlType;