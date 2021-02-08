import React, { useContext } from "react";
import ColorContext, { ColorConsumer } from "../contexts/color";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const SelectColors = () => {
  const { actions } = useContext(ColorContext);
  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      {/* <ColorConsumer> */}
      <div style={{ display: "flex" }}>
        {colors.map((color) => (
          <div
            key={color}
            style={{
              background: color,
              width: "24px",
              height: "24px",
              cursor: "pointer",
            }}
            onClick={() => actions.setColor(color)}
            onContextMenu={(e) => {
              e.preventDefault();
              actions.setSubcolor(color);
            }}
          />
        ))}
      </div>
      <hr />
      {/* </ColorConsumer> */}
    </div>
  );
};

export default SelectColors;
