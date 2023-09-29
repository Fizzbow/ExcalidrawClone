import TopBar from "../components/TopBar";
import SildBar from "../components/SildBar";
import { ObjectConfig } from "../App";

interface Props {
  config: ObjectConfig;
  setConfig: (config: ObjectConfig) => void;
}

const EditPanel = ({ config, setConfig }: Props) => {
  return (
    <div className="p-4 w-full h-full absolute flex flex-col gap-4 pointer-events-none">
      <TopBar
        shape={config.shape || ""}
        selectedShape={(shape) => {
          shape = shape || "";
          setConfig({
            ...config,
            shape,
          });
        }}
      />
      <SildBar
        roughStyle={config.style}
        changeStyle={(style) =>
          setConfig({
            ...config,
            style,
          })
        }
      />
    </div>
  );
};

export default EditPanel;
