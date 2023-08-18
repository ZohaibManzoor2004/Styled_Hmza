import React from "react";
import { Container, Typography } from "@mui/material";
import InputDistributionParameters from "../InputDistributionParameters/InputDistributionParameters";

interface IProps {}

const CustomDistributions: React.FC<IProps> = () => {
  return (
    <div>
      <Container sx={{ pt: "70px" }} maxWidth="lg">
        <Typography fontWeight={700} variant="h4" textAlign={"center"}>
          Custom Distributions
        </Typography>
        <InputDistributionParameters />
      </Container>
    </div>
  );
};

export default CustomDistributions;
