import React from "react";
import { LinearProgress, Typography, Box } from "@mui/material";

type ProgressBarProps = {
  label: string;
  value: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ label, value }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
      <Box sx={{ width: "100%", marginRight: 1 }}>
        <Typography variant="body2" color="text.secondary">
          {label}
        </Typography>
      </Box>
      <Box sx={{ width: "70%" }}>
        <LinearProgress variant="determinate" value={value} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">
          {`${Math.round(value)}%`}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProgressBar;
