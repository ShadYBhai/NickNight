import fetchPopularGames from "../actions/gamesAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import React from "react";
import Game from "../components/Game";
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularGames());
  });

  const games = useSelector((state) => state.games);

  console.log(games);

  return (
    <div>
      Home
      <Game />
    </div>
  );
};

export default Home;
