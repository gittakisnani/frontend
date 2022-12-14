import { useState, useEffect } from "react";
import SideMenu from "../../components/SideMenu";
import { BsPlusLg } from "react-icons/bs";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import ProtectedRoute from "../../components/ProtectedRoute";

const ContestList = () => {
  const router = useRouter();

  const [contests, SetContests] = useState([]);
  const [activeContestExists, SetActiveContestExists] = useState(false);

  useEffect(() => {
    axios
      .get("https://dsp-archiwebo21-ss-da-om-en.fr/api/v1/contests")
      .then((response) => {
        console.log("responses are :", response.data);
        SetContests(response.data);
      });
    isActiveContestExist();
    console.log(activeContestExists);
  }, []);

  const isActiveContestExist = () => {
    let list = null;
    list = contests.filter((item) => item.status == "Active");
    console.log("list of active contests :", list);
    if (list.length > 0) {
      console.log("value of list.length :", list.length);
      SetActiveContestExists(true);
    }
  };

  const viewContest = (contestid) => {
    console.log("id", contestid);
    router.push("https://dsp-archiwebo21-ss-da-om-en.fr/admin/" + contestid);
  };

  return (
    <ProtectedRoute>
      <SideMenu />
      <div className="main-wrap">
        <div className="wrapSection">
          <div className="block active">
            <div className="contest-list">
              <div className="headerwithbutton">
                <div>
                  <h2>Liste du concours</h2>
                </div>
                {!activeContestExists ? (
                  <div>
                  
                      <button>
                        <BsPlusLg /> Nouveau concours
                      </button>
                   
                  </div>
                ) : (
                  <div>
                    <button
                      disabled={true}
                      style={{ backgroundColor: "#B2BEB5" }}
                    >
                      <BsPlusLg /> Nouveau concours
                    </button>
                  </div>
                )}
              </div>

              <div className="table">
                <table>
                  <tbody>
                    <tr>
                      <th>Nom du concours</th>
                      <th>Date de début</th>
                      <th>Date de fin</th>
                      <th>Statut</th>
                    </tr>
                    {contests.map((contest) => {
                      if (contest.status === "Active") {
                        return (
                          <tr key={contest._id}>
                            <td>{contest.name}</td>
                            <td>
                              {new Date(contest.startDate).getDay() +
                                "." +
                                new Date(contest.startDate).getMonth() +
                                "." +
                                new Date(contest.startDate).getFullYear()}
                            </td>
                            <td>
                              {new Date(contest.endDate).getDay() +
                                "." +
                                new Date(contest.endDate).getMonth() +
                                "." +
                                new Date(contest.endDate).getFullYear()}
                            </td>

                            <td>
                             
                                <button
                                  onClick={() => {
                                    viewContest(contest._id);
                                  }}
                                >
                                  Voir le concours
                                </button>
                           
                            </td>
                          </tr>
                        );
                      } else if (contest.status === "InActive") {
                        return (
                          <tr key={contest._id}>
                            <td>{contest.name}</td>
                            <td>
                              {new Date(contest.startDate).getDay() +
                                "." +
                                new Date(contest.startDate).getMonth() +
                                "." +
                                new Date(contest.startDate).getFullYear()}
                            </td>
                            <td>
                              {new Date(contest.endDate).getDay() +
                                "." +
                                new Date(contest.endDate).getMonth() +
                                "." +
                                new Date(contest.endDate).getFullYear()}
                            </td>
                            <td>
                              <button>Sélectionnez le gagnant du prix final</button>
                            </td>
                          </tr>
                        );
                      } else {
                        return (
                          <tr key={contest._id}>
                            <td>{contest.name}</td>
                            <td>
                              {new Date(contest.startDate).getDay() +
                                "." +
                                new Date(contest.startDate).getMonth() +
                                "." +
                                new Date(contest.startDate).getFullYear()}
                            </td>
                            <td>
                              {new Date(contest.endDate).getDay() +
                                "." +
                                new Date(contest.endDate).getMonth() +
                                "." +
                                new Date(contest.endDate).getFullYear()}
                            </td>
                            <td>Fin</td>
                          </tr>
                        );
                      }
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default ContestList;
