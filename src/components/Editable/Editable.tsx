import * as React from "react";
import "./Editable.scss";

export interface IEditableProperties {
    /** Reference to the element that will be rendered on edition */
    childRef: React.MutableRefObject<any>;
    /** Element that will be rendered on edit */
    children: React.ReactNode;
    /** Placeholder that will be displayed if no value is defined */
    placeholder: string;
    /** Current text that will be displayed */
    text: string;
    /** Type of element that will be rendered on edit*/
    type: string;
}

const Editable: React.FC<IEditableProperties> = ({
    childRef,
    children,
    placeholder,
    text,
    type,
    ...props
}) => {
    const [isEditing, setEditing] = React.useState(false);

    React.useEffect(() => {
        if (childRef && childRef.current && isEditing === true) {
            childRef.current.focus();
            childRef.current.select();
        }
    }, [isEditing, childRef]);

    const handleKeyDown = (
        event: React.KeyboardEvent<HTMLDivElement>,
        type: string
    ) => {
        const { key } = event;
        const keys = ["Escape", "Tab"];
        const enterKey = "Enter";
        const allKeys = [...keys, enterKey];
        if (
            (type === "textarea" && keys.indexOf(key) > -1) ||
            (type !== "textarea" && allKeys.indexOf(key) > -1)
        ) {
            setEditing(false);
        }
    };

    return (
        <section {...props}>
            {isEditing ? (
                <div
                    onBlur={() => setEditing(false)}
                    onKeyDown={e => handleKeyDown(e, type)}
                >
                    {children}
                </div>
            ) : (
                <div
                    className={`rounded py-2 px-3 text-gray-700 leading-tight whitespace-pre-wrap hover:shadow-outline editable-${type}`}
                    onClick={() => setEditing(true)}
                >
                    <span
                        className={`${text ? "text-black" : "text-gray-500"}`}
                    >
                        {text || placeholder || "Editable content"}
                    </span>
                </div>
            )}
        </section>
    );
};

export default Editable;
