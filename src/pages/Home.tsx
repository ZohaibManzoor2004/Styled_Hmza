import React from "react";
import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import useApp from "../hooks/useApp";
import DetailsTable from "../components/DetailsTable/DetailsTable";
import PerformanceMeasures from "../components/PerformanceMeasures/PerformanceMeasures";
import InputParameters from "../components/InputParameters/InputParameters";
import InputParameters2 from "../components/InputParameters/InputParameters2";
import ChiSquare from "../components/ChiSquare/ChiSquare";
import CustomDistributions from "../components/CustomDistributions/CustomDistributions";
interface IProps {}
const Home: React.FC<IProps> = () => {
  const { performanceMeasures } = useApp();
  return (
    <div>
      <AppBar
        sx={{
          p: 0.2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#556B2F",
          clipPath: "polygon(0 0, 100% 0, 100% 80%, 90% 100%, 80% 80%, 70% 100%, 60% 80%, 50% 100%, 40% 80%, 30% 100%, 20% 80%, 10% 100%, 0 80%)",

        }}
      >
        <Typography fontWeight={"bold"} variant="h5">
          <div>
            <h1>Darbar Resturant (Dining) Queuing System</h1>
          </div>
        </Typography>
      </AppBar>
      <Container sx={{ pt: "90px", pb: "70px" }} maxWidth="lg">
        <InputParameters /> 
        <CustomDistributions />
        <InputParameters2 />
        <DetailsTable />
        <PerformanceMeasures performanceMeasures={performanceMeasures} />
        <ChiSquare />
      </Container>
    </div>
  );
};

export default Home;
