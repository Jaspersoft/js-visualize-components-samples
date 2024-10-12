import {CodeForInputControlTypes} from "../constants/codeForInputControlTypes.ts";
import InputControlType from "./InputControlType.tsx";

const InputControlTypes = (props: any) => {
    console.log("(InputControlTypes.tsx:5) props => ", props);

    return (<>
        {CodeForInputControlTypes.map(({code, title}) => {
            return <InputControlType jsContent={code} title={title}/>;
        })}
    </>);
}

export default InputControlTypes;