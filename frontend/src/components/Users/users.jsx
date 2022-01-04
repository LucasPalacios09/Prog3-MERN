import React, { useEffect, useState } from "react";
import * as userService from "./userService";
import UserCard from "./userCard";

export default function Users() {
  const [users, setusers] = useState([]);

  const loadUsers = async () => {
    const res = await userService.getUsers();
    const sortedByScore = res.data.sort((a, b) => b.score - a.score);
    setusers(sortedByScore);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="row">
      {users.map((user) => {
        return (
          <UserCard user={user} key={user._id} loadUsers={loadUsers}></UserCard>
        );
      })}
    </div>
  );
}
