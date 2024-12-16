import { Button, Stack } from "@mui/material";

const Actions = () => {
  return (
    <Stack spacing={2}>
      <Button variant="contained" color="primary">Edit</Button>
      <Button variant="outlined" color="secondary">Delete</Button>
      <Button variant="text">More Actions</Button>
    </Stack>
  );
};

export default Actions;
