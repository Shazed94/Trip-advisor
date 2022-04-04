//  css file
import "./ColorSwatch.css";

// importing hooks
import { useCustomization } from "../../customhooks/useCustomization";

export default function ColorSwatch() {
  const colors = ["rgb(89 196 225)", "rgb(155 235 164)", "rgb(109 146 253)"];
  const { changeColor } = useCustomization();
  console.log("colorswatch");
  return (
    <>
      <div className="color-selectors">
        <div className="color-wrapper">
          <div className="selector-button">
            {colors.map((color) => (
              <div
                key={color}
                onClick={() => changeColor(color)}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
