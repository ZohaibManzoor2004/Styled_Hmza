import React from "react";
import { Card, Typography, Grid, TextField, Button } from "@mui/material";
import useApp from "../../hooks/useApp";

interface IProps {}
interface Props {
  title: string;  // Explicit type (recommended for TypeScript)
}
export const ComponentX = ({ title }: Props) => {
  return <h1>{title}</h1>;  // Or any other JSX
};
const InputParameters2: React.FC<IProps> = () => {
  const { numberOfServers, setNumberOfServers, setSpeed, generateArrivals, } =
    useApp();
  setSpeed(1);
  return (
    <Card sx={{ p: 2 }}>
      <Typography variant="h5" fontWeight={"bold"}>
        Simulator For Random Arrivals and Service Time
      </Typography>
      <Grid container spacing={2} sx={{ pt: 2 }}>
        {/* <Grid item xs={12} sm={6} md={4}>
          <TextField
            type={"number"}
            fullWidth
            variant="standard"
            label="Number of Customers"
            value={numberOfCustomers}
            onChange={(e) => setNumberOfCustomers(Number(e.target.value))}
          />
        </Grid> */}
        {/* <Grid item xs={12} sm={6} md={6}>
          <TextField
            fullWidth
            select
            variant="standard"
            label="Speed"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
          >
            <MenuItem value={1}>1x</MenuItem>
            <MenuItem value={2}>2x</MenuItem>
            <MenuItem value={5}>5x</MenuItem>
            <MenuItem value={10}>10x</MenuItem>
            <MenuItem value={0}>Instant</MenuItem>
          </TextField>
        </Grid> */}
        <Grid item xs={12} sm={8} md={8}>
          <TextField
            fullWidth
            type="number"
            variant="standard"
            label="Number of Servers"
            value={numberOfServers}
            onChange={(e) => setNumberOfServers(Number(e.target.value))}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <div className="flex">
            <Button onClick={generateArrivals} variant="outlined" style={{backgroundColor:"#556B2F" , color:"white"}}>
              Run Simulator for Given Number of Servers
            </Button>
          </div>
        </Grid>
      </Grid>
    </Card>
  );
};

export default InputParameters2;