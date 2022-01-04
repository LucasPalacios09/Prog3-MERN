import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import * as userService from "./userService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UserForm() {
  const navigate = useNavigate();
  const params = useParams();

  const getUser = async (id) => {
    const user = await userService.getUser(id);
    console.log(user);
    const { username, password, avatar, score } = user.data;
    setUser({ username, password, avatar, score });
  };

  useEffect(() => {
    if (params.id) getUser(params.id);
  }, [params.id]);

  const [user, setUser] = useState({
    username: "",
    password: "",
    avatar: "",
    score: "",
  });

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!params.id) {
      await userService.createUser(user);
      toast.success("The user was created");
    } else {
      await userService.updateUser(user, params.id);
      toast.success("The user was updated");
    }
    navigate("/users");
  };

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3>New User</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="User Name"
                    name="username"
                    value={user.username}
                    onChange={handleInputChange}
                    autoFocus
                  />
                  <label htmlFor="floatingInput">User Name</label>
                </div>
              </div>
              <div className="form-group">
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Enter your password..."
                    name="password"
                    value={user.password}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="floatingInput">Password</label>
                </div>
              </div>
              <div className="form-group">
                <div className="form-floating mb-3">
                  <input
                    type="url"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Enter your vatar url..."
                    name="avatar"
                    value={user.avatar}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="floatingInput">Image Avatar URL </label>
                </div>
              </div>
              {params.id ? (
                <button type="submit" className="btn btn-warning" name="update">
                  Update
                </button>
              ) : (
                <button type="submit" className="btn btn-light">
                  Enviar
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
