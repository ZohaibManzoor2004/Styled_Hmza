import React from "react";
import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import useApp from "../hooks/useApp";
import DetailsTable from "../components/DetailsTable/DetailsTable";
import PerformanceMeasures from "../components/PerformanceMeasures/PerformanceMeasures";
import InputParameters from "../components/InputParameters/InputParameters";
import ChiSquare from "../components/ChiSquare/ChiSquare";
import CustomDistributions from "../components/CustomDistributions/CustomDistributions";

interface IProps {}

const Home: React.FC<IProps> = () => {
  const { performanceMeasures } = useApp();

  return (
    <div>
      <AppBar
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#000000",
        }}
      >
        <Typography fontWeight={"bold"} variant="h5">
          Airport Queue Simulation
        </Typography>
      </AppBar>
      <Container sx={{ pt: "90px", pb: "70px" }} maxWidth="lg">
        <InputParameters />
        <DetailsTable />
        <PerformanceMeasures performanceMeasures={performanceMeasures} />
        <ChiSquare />
        <CustomDistributions />
      </Container>
    </div>
  );
};

export default Home;
