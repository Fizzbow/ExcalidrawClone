import TopBar from "../components/TopBar";
import SildBar from "../components/SildBar";

const EditPanel = () => {
  return (
    <div className="p-4 w-full h-full absolute flex flex-col gap-4 pointer-events-none">
      <TopBar />
      <SildBar />
    </div>
  );
};

export default EditPanel;
