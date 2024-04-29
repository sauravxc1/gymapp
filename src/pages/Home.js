import { useState } from "react"
import React from 'react'
import { Box } from "@mui/material"
import Exercies from "../components/Exercies"
import SearchExercises from "../components/SearchExercises"
import HeroBanner from "../components/HeroBanner"
const Home = () => {
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises/>
      <Exercies/>
    </Box>
  )
}

export default Home