import Logo from "../assets/logo-light.png";

const Loader = () => {
  return (
    <div className="preloader">
      <div className="preloader__row">
        <div className="preloader__item">
          <img alt="Loader..." src={Logo} />
        </div>
      </div>
    </div>
  );
};
export default Loader;
