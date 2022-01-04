import React from "react";
import "./userCard.scss";
import { useNavigate } from "react-router";
import * as userService from "./userService";

export default function UserCard(props) {
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    await userService.deleteUser(id);
    props.loadUsers();
  };

  return (
    <div className="col-md-4">
      <div
        className="card border-info mb-3 card-hover"
        style={{ maxWidth: "20rem" }}
      >
        <div className="card-header row">
          <h4 style={{ width: "65%" }}>{`Score: ${props.user.score}`}</h4>
        </div>
        <div className="card-body card-body-m">
          <h4 className="card-title">{props.user.username}</h4>
          <img
            src={props.user.avatar}
            alt={`${props.user.username} Foto`}
            className="img-fluid"
          />
        </div>
        <div className="grid">
          <div>
            <button
              className="btn btn-outline-danger"
              onClick={() => handleDelete(props.user._id)}
            >
              X
            </button>
          </div>
          <div>
            <button
              className="btn btn-outline-warning"
              onClick={() => navigate(`/update-user/${props.user._id}`)}
            >
              Up
            </button>
          </div>
        </div>
      </div>
      {/* <h1>{props.user.username}</h1>
      <img src={props.user.avatar} alt={`${props.user.username} Foto`} /> */}
    </div>
  );
}
