import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";
import Detail from "../components/Detail";
import SimilarExercise from "../components/SimilarExercise";
import ExerciseVideos from "../components/ExerciseVideos";


const ExerciseDetail = () => {
  const [exerciseDetail, setexerciseDetail] = useState({});
  const [exerciseVideos, setexerciseVideos] = useState([])
  const [targetMuscleExercises, settargetMuscleExercises] = useState([])
  const [equipmentExercises, setequipmentExercises] = useState([])
  const { id } = useParams();
  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDburl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";


      const exerciseDetailData = await fetchData(
        `${exerciseDburl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setexerciseDetail(exerciseDetailData);

      const exerciseVideoData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      );

      setexerciseVideos(exerciseVideoData.contents);

      const targetMuscleExercisesData = await fetchData(
        `${exerciseDburl}/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions
      );

      settargetMuscleExercises(targetMuscleExercisesData);

      const equipmentExercisesData = await fetchData(
        `${exerciseDburl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      );

      setequipmentExercises(equipmentExercisesData);
      
    };
    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exercisevideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercise targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  );
};

export default ExerciseDetail;
