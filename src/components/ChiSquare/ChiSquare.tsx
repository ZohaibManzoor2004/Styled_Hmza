import React, { useEffect, useState } from "react";
import { Card, Typography } from "@mui/material";
import Container from "@mui/material/Container/Container";
import useApp from "../../hooks/useApp";
import source from "./../../source/data.json";
import {
  chiSquare,
  chiSquareObservedFreqs,
  getExpectedFrequenciesAndSummation,
  MLE,
  probabilityDistribution,
} from "../../utils/common";

interface IProps {}

const ChiSquare: React.FC<IProps> = () => {
  const {
    customerRecords,
    setNumberOfCustomers,
    numberOfCustomers,
    generateArrivals,
  } = useApp();
  const [chiSquareState, setChiSquare] = useState({
    interArrival: 0,
    serviceTime: 0,
    critical: 7.8147,
  });

  /**
   * @Mutahhir
   * @dev use debugger to see the values of the variables
   */
  useEffect(() => {
    console.log("======================================");
    const serviceTimes = source.shaped.map((customer) => customer.service);
    const interArrivals = source.shaped.map(
      (customer) => customer.interArrival
    );

    // Here, numIntervals represents the number of intervals to use for the chi-squared test.
    //We are using 5 intervals in this case.
    const numIntervals = 5;

    const interArrivalObservedFreqs = chiSquareObservedFreqs(
      interArrivals,
      numIntervals
    );
    const serviceTimeObservedFreqs = chiSquareObservedFreqs(
      serviceTimes,
      numIntervals
    );
    const observedFrequenciesSummation1 = interArrivalObservedFreqs.reduce(
      (acc, el) => acc + el,
      0
    ); //inter arrival
    const observedFrequenciesSummation2 = serviceTimeObservedFreqs.reduce(
      (acc, el) => acc + el,
      0
    ); //service time

    const { MLEs: interArrivalMLE, sum: interObservedSum } = MLE(
      interArrivalObservedFreqs
    );
    const { MLEs: serviceTimeMLE, sum: serviceObservedSum } = MLE(
      serviceTimeObservedFreqs
    );

    const calculatedLambdaForInterArrivalTime =
      interObservedSum / observedFrequenciesSummation1;
    const calculatedLambdaForServiceTime =
      serviceObservedSum / observedFrequenciesSummation2;

    const InterArrivalprobabilities = Array(numIntervals)
      .fill(0)
      .map((_, index) =>
        probabilityDistribution(calculatedLambdaForInterArrivalTime, index)
      );
    const serviceTimeprobabilities = Array(numIntervals)
      .fill(0)
      .map((_, index) =>
        probabilityDistribution(calculatedLambdaForServiceTime, index)
      );

    const {
      expectedFreqs: interArrivalExpectedFrequencies,
      sum: sumOfInterArrivalExpected,
    } = getExpectedFrequenciesAndSummation(
      observedFrequenciesSummation1,
      InterArrivalprobabilities
    );
    const {
      expectedFreqs: serviceTimeExpectedFrequencies,
      sum: sumOserviceTimeExpected,
    } = getExpectedFrequenciesAndSummation(
      observedFrequenciesSummation2,
      serviceTimeprobabilities
    );

    const interArrivalChiSquare = chiSquare(
      interArrivalExpectedFrequencies,
      interArrivalObservedFreqs
    );
    const serviceTimeChiSquare = chiSquare(
      serviceTimeExpectedFrequencies,
      serviceTimeObservedFreqs
    );

    // debugger;
    console.log("interArrivalChiSquare", interArrivalChiSquare);
    console.log("serviceTimeChiSquare", serviceTimeChiSquare);
    setChiSquare((prev) => ({
      ...prev,
      interArrival: Number(interArrivalChiSquare.toFixed(2)),
      serviceTime: Number(serviceTimeChiSquare.toFixed(2)),
    }));

    console.log("======================================");
  }, []);

  useEffect(() => {
    // @ts-ignore
    setNumberOfCustomers(source.shaped.length);
  }, []);

  useEffect(() => {
    generateArrivals();
  }, [numberOfCustomers]);

  return (
    <div>
      <Container sx={{ pt: "70px" }} maxWidth="sm">
        <Card sx={{ p: 2 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            color="black"
            textAlign={"center"}
          >
            Chi-Square Test
          </Typography>
          <Typography variant="h6" color="black" textAlign={"center"}>
            Goodness Of Fit Test
          </Typography>
          <Typography sx={{ mt: 2 }} color="black">
            <b>Inter Arrival Time Calculated Value</b>
          </Typography>
          <Typography>{chiSquareState.interArrival}</Typography>
          <Typography color="black">
            <b>Service Time Calculated Value</b>
          </Typography>
          <Typography>{chiSquareState.serviceTime}</Typography>
          <Typography color="black">
            <b>Critical Value</b>
          </Typography>
          <Typography>{chiSquareState.critical}</Typography>
          <Typography sx={{ mt: 2 }}>
            Since calculated value is less than critical value, the given data
            follows Poisson Distribution
          </Typography>
          <Typography variant="h5" color="green" fontWeight="bold">
            PASS
          </Typography>
        </Card>
      </Container>
    </div>
  );
};

export default ChiSquare;
