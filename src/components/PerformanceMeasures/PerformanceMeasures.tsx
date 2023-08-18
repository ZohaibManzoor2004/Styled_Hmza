import React from "react";
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
    marginTop: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
        Performance Measures
      </Typography>
      <Table className={classes.table}>
        <TableBody>
          <TableRow>
            <TableCell style={{ fontWeight: 700 }}>
              L (Average Customers in System)
            </TableCell>
            <TableCell>{performanceMeasures?.l}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ fontWeight: 700 }}>
              Lq (Average Customers in Queue)
            </TableCell>
            <TableCell>{performanceMeasures?.lq}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ fontWeight: 700 }}>
              W (Average Waiting Customers in System - min)
            </TableCell>
            <TableCell>{performanceMeasures?.w}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ fontWeight: 700 }}>
              Wq (Average Waiting Customers in Queue - min)
            </TableCell>
            <TableCell>{performanceMeasures?.wq}</TableCell>
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
