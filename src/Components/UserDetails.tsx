import { useEffect, useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import { User } from "@/app/page";

interface UserDetailsProps {
  userDetail: User | null;
}

const UserDetails = ({userDetail }: UserDetailsProps) => {
  const [tab, setTab] = useState(0);
  const [details, setDetails] = useState<any>(null);

  useEffect(() => {
    setDetails(userDetail)
  }, [userDetail])

  if (!details) return <Typography>Loading...</Typography>;

  return (
    <Box>
      <Tabs value={tab} onChange={(e, newVal) => setTab(newVal)}>
        <Tab label="Profile" />
        <Tab label="Contacts" />
      </Tabs>

      {tab === 0 && (
        <Box mt={2}>
          <Typography>Name: {details.name}</Typography>
          <Typography>DOB: {details.birthDate}</Typography>
          <Typography>Address: {details.address}</Typography>
        </Box>
      )}

      {tab === 1 && (
        <Box mt={2}>
          <Typography>Mobile: {details.phone}</Typography>
          <Typography>Skype ID: {details.skypeId}</Typography>
          <Typography>Email: {details.email}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default UserDetails;
