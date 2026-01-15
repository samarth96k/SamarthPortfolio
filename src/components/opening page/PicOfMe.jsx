import React from "react";
// import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function SizeAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        // my-portfolio\public\
        src="/IMG-20231210-WA0024.jpg"
        sx={{ width: 180, height: 180 }}
      />
    </Stack>
  );
}