import React from "react";
import icon from '/assets/perf_measures.webp';
import { makeStyles } from "@mui/styles";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Theme,
  Typography,
  Box,
} from "@mui/material";
import useApp from "../../hooks/useApp";
import { mmc_calculation } from "../../utils/MMC";
import { useLocation } from "react-router";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(6),//space b/t performance measure and table
    display: "flex",
    backgroundColor:"white",
    flexDirection: "column",
    alignItems: "center",
    //backgroundImage:"icon.png",
    borderRadius:"3%",
    backgroundImage: `url(${icon})`,
    backgroundPosition: "center",     // optional, centers the image
  },
  table: {
    marginTop: theme.spacing(2),
    maxWidth: 550,
  },
  header: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
    fontWeight: 700,
  },
  value: {
    color: theme.palette.success.main,
  },
}));

interface IProps {
  performanceMeasures: Partial<ReturnType<typeof mmc_calculation>>;
}

const PerformanceMeasures: React.FC<IProps> = ({ performanceMeasures }) => {
  const classes = useStyles();
  const { serverSpecs } = useApp();
  const location = useLocation();

  return (
    <Box className={classes.root}>
      <Typography fontWeight={"bold"} variant="h5" gutterBottom>
       <h1> Performance Measures</h1>
      </Typography>
      <Table className={classes.table}>
        <TableBody>
          <TableRow>
            <TableCell style={{ fontWeight:700 }}>
             <h2> L (Average Customers in System) </h2>
            </TableCell>
            <TableCell><h2>{performanceMeasures?.l}</h2></TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ fontWeight: 700 }}>
              <h2>Lq (Average Customers in Queue)</h2>
            </TableCell>
            <TableCell><h2>{performanceMeasures?.lq}</h2></TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ fontWeight: 700 }}>
              <h2>W (Average Waiting Customers in System - min)</h2>
            </TableCell>
            <TableCell><h2>{performanceMeasures?.w}</h2></TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ fontWeight: 700 }}>
              <h2>Wq (Average Waiting Customers in Queue - min)</h2>
            </TableCell>
            <TableCell><h2>{performanceMeasures?.wq}</h2></TableCell>
          </TableRow>
          {location.pathname === "/" &&
            serverSpecs.map((server, i) => (
              <TableRow key={i}>
                <TableCell style={{ fontWeight: 700 }}>
                  Utilization Server {i + 1}
                </TableCell>
                <TableCell>{server.utilization}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default PerformanceMeasures;