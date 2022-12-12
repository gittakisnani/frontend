import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import WhiteHeader from "/components/WhiteHeader";
import jwt from "jsonwebtoken";
import axios from "axios";
import { userDetails } from "../components/UserFacade";

const ViewUser = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // const contestId = localStorage.getItem("contestId");
    axios
      .get(
        "https://dsp-archiwebo21-ss-da-om-en.fr/api/v1/users/" +
          userDetails().userId
      )
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      });
  }, []);

  return (
    <div>
      <div className="headercontainer">
        <WhiteHeader />
      </div>

      <section id="user-dashboard">
        <div className="container">
          <div className="block active">
            <br />
            <br />
            <div className="user-profile">
              <h2>Détails de l'utilisateur</h2>
              <div className="item">
                <i className="uil uil-user"></i>
                <p>Nom &nbsp;&nbsp; : {data.name}</p>
              </div>
              <div className="item">
                <i className="uil uil-envelope"></i>
                <p>E-mail &nbsp;&nbsp;&nbsp;&nbsp;: {data.email}</p>
              </div>
              <div className="buttons">
                <Link href="/edituser">
                  <button style={{ backgroundColor: "#008039" }}>
                  Modifier les détails
                  </button>
                </Link>
                <button>Supprimer le compte</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container"></div>
      </footer>
    </div>
  );
};

export default ViewUser;
