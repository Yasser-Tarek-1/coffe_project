const Logo = ({ className, logo }) => {
  return (
    <div className="flex items-center justify-center">
      <img src={logo} alt="logo" className={`${className} w-[76px]`} />
    </div>
  );
};

export default Logo;
