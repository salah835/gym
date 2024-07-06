import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import loader from "./loader";

const SimilarExercise = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3" mb={5} >
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <loader />
        )}
      </Stack>
      <Typography variant="h3" mb={5} >
        Exercises that target the same Equipment 
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {equipmentExercises.length ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercise;
