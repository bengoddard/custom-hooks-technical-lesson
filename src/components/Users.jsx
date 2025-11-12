import React, { useState, useEffect } from "react";

function Users() {
  const { data, loading, error, refetch } = useFetchData("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <p className="loading">Loading users...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="container">
      <h2>Users</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
