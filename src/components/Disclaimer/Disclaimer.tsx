import React from "react";
import { Card, Typography } from "@mui/material";

interface IProps {}

const Disclaimer: React.FC<IProps> = () => {
  return (
    <Card sx={{ p: 1 }}>
      <Typography>
        Arrivals and Service times are in <b>minutes</b>
      </Typography>
    </Card>
  );
};

export default Disclaimer;
