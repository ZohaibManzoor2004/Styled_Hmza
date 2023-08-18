import React from "react";
import { makeStyles } from "@mui/styles";
import { Theme, Container, Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import useApp from "../hooks/useApp";
import DetailsTable from "../components/DetailsTable/DetailsTable";
import PerformanceMeasures from "../components/PerformanceMeasures/PerformanceMeasures";
import InputParameters from "../components/InputParameters/InputParameters";
import { useNavigate } from "react-router-dom";
import ChiSquare from "../components/ChiSquare/ChiSquare";
import CustomDistributions from "../components/CustomDistributions/CustomDistributions";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingBottom: 20,
  },
  appHeading: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "11px !important",
    },
  },
  appButton: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px !important",
    },
  },
}));

interface IProps {}

const Home: React.FC<IProps> = () => {
  const classes = useStyles();
  const { performanceMeasures } = useApp();
  const navigate = useNavigate();

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
      <Container sx={{ pt: "70px" }} maxWidth="lg">
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
