import React from "react";
import { Container, Typography } from "@mui/material";
import InputDistributionParameters from "../InputDistributionParameters/InputDistributionParameters";

interface IProps {}

const CustomDistributions: React.FC<IProps> = () => {
  return (
    <div style={{ color: "black", padding: "20px" }}>
      <Container sx={{ pt: "70px" }} maxWidth="lg">
        <Typography fontWeight={700} variant="h4" textAlign={"center"}>
          <div style={{backgroundColor:"White",
                       display: "inline-block",
                       borderRadius:"3%",
                       border:"1px solid black"}}>Calculator</div>
        </Typography>
        <InputDistributionParameters />
      </Container>
    </div>
  );
};

export default CustomDistributions;