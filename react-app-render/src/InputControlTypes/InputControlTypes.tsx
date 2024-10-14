import {CodeForInputControlTypes} from "../constants/codeForInputControlTypes.ts";
import InputControlType from "./InputControlType.tsx";

const InputControlTypes = (props: any) => {
    console.log("(InputControlTypes.tsx:5) props => ", props);

    return (<>
        {CodeForInputControlTypes.map(({jsCode, title, reactCode}) => {
            return <InputControlType jsContent={jsCode} title={title} reactContent={reactCode}/>;
        })}
    </>);
}

export default InputControlTypes;