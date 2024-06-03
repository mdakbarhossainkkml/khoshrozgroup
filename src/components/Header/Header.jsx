import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "./header.scss";

const Header = () => {
  const [click, setClick] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleClick = () => setClick(!click);

  const headerData = [
    { label: "Home", to: "/", exact: true },
    { label: "Corporate Profile", to: "/profile", exact: true },
    { label: "Our Brands", to: "/brands", exact: true },
    { label: "Chairman Speech", to: "/speech", exact: true },
    { label: "Companies", to: "/companies", exact: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={isSticky ? "header sticky" : "header"}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-md">
              <div className="header__logo d-md-block d-flex justify-content-between">
                <NavLink to="/" className="navbar-brand d-block">
                  <img
                    src="https://res.cloudinary.com/dfaw271y6/image/upload/v1708581530/khoshroz_group_logo_finalCut_ab2irc.png"
                    alt="Khoshroz Group"
                    className="img-fluid"
                  />
                </NavLink>
                <button className="navbar-toggler" type="button" onClick={handleClick}>
                  {click ? (
                    <span className="icon">
                      <IoClose />
                    </span>
                  ) : (
                    <span className="icon">
                      <FaBars />
                    </span>
                  )}
                </button>
              </div>
              <div className={click ? "collapse navbar-collapse show" : "collapse navbar-collapse"}>
                <ul className="navbar-nav">
                  {headerData.map((item, index) => (
                    <li className="nav-item" key={index}>
                      <NavLink to={item.to} className="nav-links" onClick={handleClick}>
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
