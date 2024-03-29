import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { wardData } from "../data/wardData";
import { notecontext} from "./notecontext";
import { geojsonData } from './finalsetted';


const Navbar = () => {
  const [data, setData] = useState(wardData);
  const [searchResult, setSearchResult] = useState(null);
  const [value, setValue] = useState('');
  const {temp}=useContext(notecontext);
  const {clicked,setClicked}= temp;

  const handleLogout =async () => {
        try {
          localStorage.removeItem("authtoken");

          if (localStorage.getItem("authtoken")=== null) {

            setislogin(false) 
            console.log("value of the islogin after logout in navbar is",islogin);
            navigate("/login");
          }  
      
      
        } catch (error) {
          console.log(error)
        }
  }
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    setClicked(searchResult);
  },[searchResult]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("to search for the value",value)
    const Newward = searchWardByName(value);
    setSearchResult(Newward.properties.ward);
    
    console.log("searchvalue",clicked)

  };
  const searchWardByName = (searchValue) => {
    if (!searchValue.trim()) return null; 
    const normalizedSearchValue = searchValue.trim().toLowerCase();
    return geojsonData.features.find(feature => {
      const featureName = feature.properties.name.toLowerCase();
      return featureName.includes(normalizedSearchValue);
    });
  };
  
  return (
    <div style={{ userSelect: "none" }}>
      <nav className="navbar p-0 fixed-top d-flex flex-row">
        <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
          <ul className="navbar-nav navbar-nav-right" style={{ gap: "7px" }}>
            <div className="">
            <form onSubmit={handleSubmit}>
              <div className="input-group md-form form-sm form-1 pl-0">
                <div className="input-group-prepend">
                  
                </div>
                <span className="input-group-text "  id="basic-text1">
                    <FaSearch onSubmit={handleSubmit}/>
                  </span>
                <input
                  className="form-control my-0 py-1 text-white max-w-[200px] h-8"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                  list="list-timezone"
                  id="input-datalist"
                  onChange={handleOnChange}
                  value={value}
                />
              </div>
              </form>
              <div className="block absolute min-w-[160px]  z-10 ml-10  min-w-[200px]max-w-[200px] text-black max-h-[160px] overflow-y-scroll w-[200px]">
                {data
                  .filter(
                    (item) =>
                      item.wardName.startsWith(value) &&
                      item.wardName !== value &&
                      value !== ""
                  )
                  .map((item) => (
                    <div
                      className=" bg-[#191C24] text-white px-2 py-1 shadow border cursor-pointer"
                      onClick={(e) => setValue(item.wardName)}
                    >
                      {item.wardName}
                    </div>
                  ))}
              </div>
            </div>

            <ul className="navbar-nav navbar-nav-right" style={{ gap: "7px" }}>
            <li>
              <Link to="/">
                <button type="button" className="btn btn-outline-primary">
                  Home
                </button>
              </Link>
            </li>
            <li>
              <Link to="/complaints">
                <button type="button" className="btn btn-outline-primary">
                  Complaints
                </button>
              </Link>
            </li>
            <li>
                <button type="button" className="btn btn-outline-primary" onClick={handleLogout}>
                  Logout
                </button>
            </li>
          </ul>
          </ul>
          <button
            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            data-toggle="offcanvas"
          >
            <span className="mdi mdi-format-line-spacing"></span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
