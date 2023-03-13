import BlogRow from "../BlogRow/BlogRow";
import SideBar from "../SideBar/SideBar";

import style from "./wrapper.module.css";

const MainWrapper = () => {
  return (
    <div className={`${style["wrapper"]}`}>
      <BlogRow />
      <div className={`${style["sidebar-wrapper"]}`}>
        <SideBar />
      </div>
    </div>
  );
};
export default MainWrapper;
