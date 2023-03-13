import style from "./header.module.css";
// const img = require("../../../assests/landingPage/aboutUs.jpg");
const BlogHeader = () => {
  return (
    <header>
      <nav className={`${style["nav-bar"]}`}>
        <div className={`${style["title"]}`}>
          <img
            src="https://s3-alpha-sig.figma.com/img/4e3f/b07e/168cf76708e6b01a601086115f09df41?Expires=1679270400&Signature=Gzk3xztu9~7gpHwQIGqe9Pogl8uUMin5ViktmZ2C9ufvt9RuhcTYwd8YH4D6wdcoOwtnljH-Cc9AxAEr3CF6148eh2Cs1g8IWdI2xwwQCV6nKoi48clQs0Al3xkD9R~oEMLwY7QvhGIO9l8Z5lHbMPjP2PlOT9EtQkoQQbQ4pOfkr6ukNkUrw9vSLZ05ztWbTHPCfZe-bueZfgrfvAAgdI~31Zhq1ANwM9kDGspuaxiuY9CIceDTY3ex85RcZjx5cIkSEVcrqOiXF~GjVPU5MC7MFh8f7Y9RzKq9deIMXkFdgdULysEFwWRrplfKrSa33IJk1gjH8a1U2eiXl4y6hg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
        </div>
        <div className={`${style["search-box"]}`}>
          <img
            src="../../../../assests/blog/search.png"
            alt="Search Icon"
            className={`${style["search-box-icon"]}`}
          />
          <input type="text" />
        </div>
        <div></div>
        <div className={`${style["right-nav"]}`}>
          <div className={`${style["right-nav-item-1"]}`}>
            <img
              src="../../../../assests/blog/write-ico.png"
              alt="Write Icon"
            ></img>
            <h4>Write</h4>
          </div>
          <div className={`${style["right-nav-item-2"]}`}>
            <img
              src="../../../../assests/blog/bell-ico.png"
              alt="Bell Icon"
            ></img>
          </div>
          <div className={`${style["right-nav-item-3"]}`}>
            <div>
              <img src="../../../../assests/blog/profile.png" alt="Profile" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default BlogHeader;
