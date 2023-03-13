import DisplayProfile from "../DisplayProfile/DisplayProfile";
import style from "./blog.module.css";

const AuthorDetail = () => {
  return (
    <div className={`${style["author-container"]}`}>
      <DisplayProfile />
      <span className={`${style["text-muted"]}`}> &#xb7;</span>
      <h4 className={`${style["text-muted"]}`}>Mar 01, 2023</h4>
    </div>
  );
};

export default AuthorDetail;
