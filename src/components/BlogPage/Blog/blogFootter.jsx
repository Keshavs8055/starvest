import style from "./blog.module.css";

const BlogFooter = () => {
  return (
    <div className={`${style["footer"]}`}>
      <button className={`${style["tag-btn"]}`}>Startup</button>
      <h4 className={`${style["text-muted"]}`}>4 min read</h4>
      <span className={`${style["text-muted"]}`}> &#xb7;</span>
      <h4 className={`${style["text-muted"]}`}>Popular on StarVest</h4>
    </div>
  );
};

export default BlogFooter;
