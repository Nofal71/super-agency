import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import DescriptionIcon from "@mui/icons-material/Description";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const Counter = () => {
  const data = [
    { label: "Projects Done", value: 325, icon: <AssignmentTurnedInIcon sx={{ fontSize: "4rem" }} /> },
    { label: "Happy Clients", value: 145, icon: <SentimentSatisfiedAltIcon sx={{ fontSize: "4rem" }} /> },
    { label: "Appreciations", value: 464, icon: <DescriptionIcon sx={{ fontSize: "4rem" }} /> },
    { label: "Support Hours", value: 8565, icon: <AccessTimeIcon sx={{ fontSize: "4rem" }} /> },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.2,
  });

  return (
    <Box
      ref={ref}
      sx={{
        width: 1,
        backgroundColor: "#343a40",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: { xs: 'column', md:'row' },
        gap:{xs:3 , md:'0'},
        flexWrap:'wrap',
        color: "#fff",
        my: 20,
        mx: 0,
        p: 3,
        py: 10
      }}
    >
      {data.map((item, index) => (
        <Stack
          key={index}
          spacing={1}
          direction={"row"}
          alignItems="center"
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>{item.icon}</Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              {inView ? (
                <CountUp start={0} end={item.value} duration={2.5} />
              ) : (
                0 // Display 0 until inView becomes true
              )}
            </Typography>
            <Typography>{item.label}</Typography>
          </Box>
        </Stack>
      ))}
    </Box>
  );
};

export default Counter;
