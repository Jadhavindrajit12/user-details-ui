'use client'
import { Grid, Paper, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import UserList from "@/Components/UserList";
import UserDetails from "@/Components/UserDetails";
import Actions from "@/Components/Actions";
import { fetchUsers } from "@/Utils/fakeApi";

export interface User {
  id: number;
  name: string;
  address: string;
  phone: string;
  birthDate: string;
  email: string;
  skypeId: string
}

const HomePage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUserDetail, setSelectedUserDetail] = useState<User | null>(null);
  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  const handleUserSelect = (id: number) => {
    const filterDetails = users.filter(item => item.id === id)
    setSelectedUserDetail(filterDetails[0] || null);
  };

  return (
    <Grid container spacing={2} p={2} className="page-container">
      <Grid item xs={3}>
        <Paper elevation={2} sx={{ padding: 2 }} className="user-list-container">
          <Typography variant="h6">User List</Typography>
          <UserList users={users} onUserSelect={handleUserSelect} selectedUser={selectedUserDetail}/>
        </Paper>
      </Grid>

      <Grid item xs={6}>
        <Paper elevation={2} sx={{ padding: 2, height: "100%" }}>
          <Typography variant="h6">User Details</Typography>
          {selectedUserDetail ? (
            <UserDetails userDetail={selectedUserDetail} />
          ) : (
            <Typography>Select a user to view details</Typography>
          )}
        </Paper>
      </Grid>

      <Grid item xs={3}>
        <Paper elevation={2} sx={{ padding: 2, height: "100%" }}>
          <Typography variant="h6">Actions</Typography>
          <Actions />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default HomePage;
