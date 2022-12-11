import SideMenu from "../../components/SideMenu";
import UserData from "../../components/UsersData";
import { FaSearch } from "react-icons/fa";


const ViewUsers = () => {
  
  

  return (
    <div>
      <SideMenu />
      <div className="main-wrap">
        <div className="wrapSection">
          <div className="block active">
            <div className="contest-list">
              <div className="headerwithbutton">
                <div><h2>Contest Participents</h2></div>
                <div>
                <div className="search">
                <input type="text" placeholder="Search" onChange={(e)=>search(e.target.value)} />
                <button>
                  <FaSearch />
                </button>
              </div>
                </div>
                
                </div>
                
                <UserData/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUsers;
