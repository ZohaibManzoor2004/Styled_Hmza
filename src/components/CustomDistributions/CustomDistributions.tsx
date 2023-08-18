import React from "react";
import { Container } from "@mui/material";
import InputDistributionParameters from "../InputDistributionParameters/InputDistributionParameters";

interface IProps {}

const CustomDistributions: React.FC<IProps> = () => {
  return (
    <div>
      <Container sx={{ pt: "70px" }} maxWidth="lg">
        <InputDistributionParameters />
      </Container>
    </div>
  );
};

export default CustomDistributions;
