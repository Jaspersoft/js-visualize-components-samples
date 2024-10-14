import {CodeForInputControlTypes} from "../constants/codeForInputControlTypes.ts";
import InputControlType from "./InputControlType.tsx";

const InputControlTypes = (vContainer: any) => {
    return (<>
        {CodeForInputControlTypes.map(({jsCode, title, reactCode}, index) => {
            return <InputControlType title={title}
                                     jsContent={jsCode}
                                     reactContent={reactCode}
                                     vContainer={vContainer}
                                     id={index}
                                     key={index}/>;
        })}
    </>);
};

export default InputControlTypes;