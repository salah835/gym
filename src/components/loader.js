import React from 'react'
import { Stack} from "@mui/material";
import { InfinitySpin } from 'react-loader-spinner';
const loader = () => {
  return (
    <Stack diraction="row" justifyContent="center" alignItem="center" width="100%" >
      <InfinitySpin color="gray" />
    </Stack>
  )
}

export default loader