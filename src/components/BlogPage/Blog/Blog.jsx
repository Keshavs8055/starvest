import AuthorDetail from "./authorDetail";
import style from "./blog.module.css";
import BlogFooter from "./blogFootter";
const Blog = () => {
  return (
    <div className={`${style["blog-container"]}`}>
      {/* <img src="../../../../assests/blog/profile.png" alt="Avatar" />
        <h3>Shubham Parashar</h3> */}
      {/* <DisplayProfile />
        <span className={`${style["text-muted"]}`}> &#xb7;</span>
        <h4 className={`${style["text-muted"]}`}>Mar 01, 2023</h4> */}
      <AuthorDetail />
      <div className={`${style["main"]}`}>
        <div>
          <h5>
            5 common mistakes by first time startup owner and how to avoid them{" "}
          </h5>
          <h2>
            Startups are hard. 90% fail, 10% within the first year itself. If
            you’re a startup founder you already know these statistics and yet
            you are irratio....
          </h2>
        </div>
        <div className={`${style["image"]}`}>
          <img
            src="../../../../assests/blog/blog-img.png"
            alt="Blog Thumbnail"
          />
        </div>
      </div>
      <BlogFooter />
    </div>
  );
};

export default Blog;
