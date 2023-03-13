import style from "./displayProfile.module.css";

const DisplayProfile = () => {
  return (
    <div className={`${style["author"]}`}>
      <img src="../../../../assests/blog/profile.png" alt="Avatar" />
      <h3>Shubham Parashar</h3>
    </div>
  );
};

export default DisplayProfile;
