import fetchPopularGames from "../actions/gamesAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import React from "react";
import Game from "../components/Game";
import styled from "styled-components";
import { motion } from "framer-motion";
import GameDetail from "../components/GameDetail";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  useEffect(() => {
    dispatch(fetchPopularGames());
  }, [dispatch]);

  const { popular, newGames, upcoming } = useSelector((state) => state.games);

  return (
    <Link to="/">
      <GameList>
        {pathId && <GameDetail />}
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map((game) => (
            <>
              <Game
                key={game.id}
                name={game.name}
                released={game.released}
                id={game.id}
                image={game.background_image}
              />
            </>
          ))}
        </Games>
        <h2>Popular</h2>
        <Games>
          {popular.map((game) => (
            <Games>
              <Game
                key={game.id}
                name={game.name}
                released={game.released}
                id={game.id}
                image={game.background_image}
              />
            </Games>
          ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <>
              <Game
                key={game.id}
                name={game.name}
                released={game.released}
                id={game.id}
                image={game.background_image}
              />
            </>
          ))}
        </Games>
      </GameList>
    </Link>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 4rem;
`;

export default Home;
