import DisplayProfile from "../DisplayProfile/DisplayProfile";
import style from "./sidebar.module.css";

const SideBar = () => {
  return (
    <div className={`${style["sidebar-container"]}`}>
      <h5>HOT TOPICS:</h5>
      <div className={`${style["topics"]}`}>
        <div className={`${style["topic"]}`}>
          <DisplayProfile />
          <h3>Main Heading Goes Here</h3>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
