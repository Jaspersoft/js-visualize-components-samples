import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-tomorrow_night";
import * as ace from "ace-builds/src-noconflict/ace";
import beautify from "ace-builds/src-noconflict/ext-beautify";
import {createRef, useEffect, useRef, useState} from "react";
import {aceEditorModes} from "../constants/liveSamplesConstants.ts";
import PreviewCode from "./PreviewCode.tsx";
import {CommonParamsForInputControl} from "../constants/codeForInputControlTypes.ts";

ace.config.set("basePath", "./");
ace.config.set("modePath", "./");
ace.config.set("themePath", "./");

const InputControlType = (props: {
    title: string,
    jsContent: string,
    reactContent: string,
    vContainer: any,
    reportUri: string,
    id: number | string,
    config?: CommonParamsForInputControl
}) => {
    const [contentType, setContentType] = useState("js");
    const [codeContent, setCodeContent] = useState(props.jsContent);
    const editorRef = createRef<any>();
    const copyCodeBtnRef = useRef(null);
    let globalTimeout: any;

    const refId = "preview-input-controls-container-" + props.id;

    useEffect(() => {
        beautify.beautify(editorRef.current.editor.session);
    }, [editorRef]);

    const onTabChange = (e: any, content: string, type: string) => {
        let currentElement = e.currentTarget;
        let tablinks = currentElement.parentElement.getElementsByClassName("tablinks");
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].classList.remove("active");
        }
        currentElement.className += " active";
        setCodeContent(content);
        setContentType(type || "javascript");
    };

    const addStylingToBtn = () => {
        const theBtn = copyCodeBtnRef.current as unknown as HTMLElement;
        theBtn?.classList?.add("copied");
        clearTimeout(globalTimeout);
        globalTimeout = setTimeout(() => {
            theBtn?.classList?.remove("copied");
        }, 1000); // Remove the class after 1 second
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(codeContent)
            .then(() => {
                addStylingToBtn();
            })
            .catch(err => {
                console.error("Failed to copy text: ", err);
            });
    };

    return (<>
        <h3>{props.title || ""}</h3>
        <div className="paper">
            <ul className="tab">
                <li className="tablinks active"
                    onClick={(e) => onTabChange(e, props.jsContent, "js")}>JavaScript
                </li>
                <li className="tablinks" onClick={(e) => onTabChange(e, props.reactContent, "react")}>React</li>
                <li className="tablinks" onClick={(e) => onTabChange(e, "", "preview")}>Preview</li>
                {contentType !== "preview" ? <li className="tablinks" style={{float: "right"}}>
                    <button className="copy-code"
                            ref={copyCodeBtnRef}
                            onClick={copyToClipboard}>Copy Code
                    </button>
                </li> : null}
            </ul>

            <div className="main-container"
                 style={{display: contentType !== "preview" ? "block" : "none"}}>
                <div className="code-container">
                        <pre className="code-snippet">
                             <AceEditor
                                 mode={aceEditorModes[contentType]}
                                 name="JS"
                                 theme="tomorrow_night"
                                 value={codeContent}
                                 width="100%"
                                 wrapEnabled
                                 readOnly
                                 showGutter={true}
                                 showPrintMargin={true}
                                 setOptions={{useWorker: false}}
                                 maxLines={18}
                                 ref={editorRef}
                             />
                        </pre>
                </div>
            </div>

            <div className="main-container"
                 style={{display: contentType === "preview" ? "block" : "none"}}>
                <PreviewCode uri={props.reportUri}
                             vContainer={props.vContainer}
                             config={props.config}
                             refId={refId}/>
            </div>
        </div>
    </>);
};

export default InputControlType;