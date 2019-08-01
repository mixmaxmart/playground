import React, { useState } from "react";
import { cn } from "../../../logic/helpers";
import "./input.scss";

export function Input(props) {
  const { type = "text" } = props;
  const { size = "m" } = props;
  const { placeholder = "exapmle" } = props;
  const { defaultValue = "text" } = props;

  const { prefix = "" } = props;
  const { sufix = "" } = props;

  const [state, setState] = useState("");
  const [value, setValue] = useState(defaultValue);

  function onFocus() {
    setState("focus");
  }
  function onBlur() {
    setState("");
  }
  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div
      className={cn("input", state)}
      data-size={size}
      data-type={type}
      // onClick={this._input.focus()}
    >
      {type === "url" && (
        <div className={cn("input__url-placeholder")}>
          <span className="dontshow">
            {prefix}
            {value ? value : placeholder}
          </span>
          <span className={cn("input__sufix")}>{sufix}</span>
        </div>
      )}

      {prefix && <span className={cn("input__prefix")}>{prefix}</span>}
      <input
        // ref={c => (this._input = c)}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={handleChange}
      />
    </div>
  );
}
