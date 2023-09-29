import { StyleState } from "../App";

const allColor = ["red", "green", "yellow", "blue"];

interface Props {
  roughStyle: StyleState;
  changeStyle: (style: StyleState) => void;
}

const SildBar = ({ roughStyle, changeStyle }: Props) => {
  return (
    <div className="bg-white p-4 max-w-[200px]  rounded-lg shadow-lg pointer-events-auto">
      <span className="text-xs">描边</span>
      <div className="flex flex-row mb-3 gap-2">
        {/* 边框颜色 */}
        {allColor.map((color) => (
          <div
            className={`rounded-sm ${
              roughStyle.color === color
                ? "outline-primary outline outline-1"
                : ""
            }`}
          >
            <div
              onClick={() =>
                changeStyle({
                  ...roughStyle,
                  color,
                })
              }
              className={`w-4 h-4 m-[2px] rounded-sm cursor-pointer outline outline-1 outline-gray-300`}
              style={{ backgroundColor: `rgba(var(--rough-${color}),1)` }}
            />
          </div>
        ))}
      </div>

      {/** 背景颜色 */}
      <span className="text-xs">背景</span>
      <div className="flex flex-row  gap-2">
        {allColor.map((bgColor) => (
          <div
            className={`rounded-sm ${
              roughStyle.bgColor === bgColor
                ? "outline-primary outline outline-1"
                : ""
            }`}
          >
            <div
              onClick={() =>
                changeStyle({
                  ...roughStyle,
                  bgColor,
                })
              }
              className={`w-4 h-4 m-[2px] rounded-sm cursor-pointer outline outline-1 outline-gray-300`}
              style={{ backgroundColor: `rgba(var(--rough-${bgColor}),1)` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SildBar;
