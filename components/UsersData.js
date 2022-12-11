import { useEffect, useState } from "react";
import axios from "axios";


const UserData = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm,setsearchTerm]=useState();
  const [searchUsers,setsearchUsers]=useState([]);
  const [isSearch,setsearch]=useState(false);

  useEffect(() => {
    getUserList();
  }, []);


  const getUserList = async ()=>{
   await axios.get("http://localhost:3001/api/v1/contest-participents")
    .then(response => setUsers(response.data));
  }

  const search =(value)=>{
    console.log(value);
    let searchUsers=users.filter((item)=>item.name == value || item.email == value );
    console.log(searchUsers)
    if (value == "") {
      console.log("awa")
      setsearch(false);
      getUserList();
    }else{
      console.log("awa-1")
      // setUsers(searchUsers);
      setsearchUsers(searchUsers);
      setsearch(true);

    }
   

  }


    return (
        <div className="table">
            <table>
                  <tbody>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Ticket id</th>
                      <th>Prize</th>
                      
                    </tr>

                    {!isSearch? users.filter(item=>item.prize!=='').map((users) => (
                      <tr key={users.id}>
                        <td>{users.name}</td>
                        <td>{users.email}</td>
                        <td>{users.ticketId}</td>
                        <td>{users.prize}</td>
                      </tr>
                    )):searchUsers.filter(item=>item.prize!=='').map((users) => (
                      <tr key={users.id}>
                        <td>{users.name}</td>
                        <td>{users.email}</td>
                        <td>{users.ticketId}</td>
                        <td>{users.prize}</td>
                      </tr>
                    )) }
                  </tbody>
                </table>
        </div>
    );
}

export default UserData;