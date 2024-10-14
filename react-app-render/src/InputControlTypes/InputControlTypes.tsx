import {CodeForInputControlTypes} from "../constants/codeForInputControlTypes.ts";
import InputControlType from "./InputControlType.tsx";

const InputControlTypes = ({vContainer}: any) => {
    return (<>
        {CodeForInputControlTypes.map((icType, index) => {
            return <InputControlType {...icType}
                                     title={icType.title}
                                     jsContent={icType.jsCode}
                                     reactContent={icType.reactCode}
                                     vContainer={vContainer}
                                     id={index}
                                     key={index}/>;
        })}
    </>);
};

export default InputControlTypes;