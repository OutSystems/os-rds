import React, { useRef, useState } from "react";
import Editable from "../Editable";
import "./DocExamples.scss";

export const UsageWithInput = () => {
    const inputRef = useRef();
    const [task, setTask] = useState("");

    return (
        <div>
            <Editable
                text={task}
                placeholder="Click here to start editing value"
                childRef={inputRef}
                type="input"
            >
                <input
                    ref={inputRef}
                    type="text"
                    name="task"
                    placeholder="Start typing to set the new value"
                    value={task}
                    onChange={e => setTask(e.target.value)}
                />
            </Editable>
        </div>
    );
};

export const UsageWithTextArea = () => {
    const textareaRef = useRef();
    const [description, setDescription] = useState("");

    return (
        <div>
            <Editable
                text={description}
                placeholder="Click here to start editing value"
                childRef={textareaRef}
                type="textarea"
            >
                <textarea
                    ref={textareaRef}
                    name="description"
                    placeholder="Description for the task"
                    rows={5}
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
            </Editable>
        </div>
    );
};
