import { Button } from "../components/button/Button";
import { useState } from "react";
import { ButtonConfig, baseButtonConfigs } from "../constants/buttonConfigs";

interface Props {
  shape: string;
  selectedShape: (shape: string) => void;
}

const TopBar = ({ shape, selectedShape }: Props) => {
  function updatedBtnSelectById(btnConfigs: ButtonConfig[], id: string) {
    const updatedSelect = btnConfigs.map((config) => {
      if (config.id === id) {
        config.isSelect = true;
        return config;
      } else {
        config.isSelect = false;
        return config;
      }
    });
    return updatedSelect;
  }

  function initButtonConfigs() {
    return updatedBtnSelectById(baseButtonConfigs, shape);
  }

  const [buttonConfigs, setButtonConfigs] = useState(initButtonConfigs);

  const toggleSelect = (id: string) => {
    selectedShape(id);
    setButtonConfigs(updatedBtnSelectById(buttonConfigs, id));
  };
  return (
    <header className="w-full  flex justify-center">
      <div
        className="
        p-2
        shadow-lg
        bg-white
        flex 
        flex-row 
        justify-center 
        items-center
        z-900
        rounded-lg
        pointer-events-auto
        "
      >
        <div>
          {buttonConfigs.map((config) => (
            <Button
              className={`mx-1  ${
                config.isSelect
                  ? "bg-primary/20 text-primary/90"
                  : "text-greyness"
              }`}
              key={config.id}
              onClick={() => toggleSelect(config.id)}
            >
              {config.icon}
            </Button>
          ))}
        </div>
      </div>
    </header>
  );
};
export default TopBar;
