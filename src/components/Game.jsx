import { motion } from "framer-motion";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { smallImage } from "../util";

const Game = ({ game }) => {
  const stringId = game.id.toString();
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(game.id, game["short_screenshots"]));
    document.body.style.overflow = "hidden";
  };

  return (
    <StyledGame layoutId={stringId} onClick={loadDetailHandler}>
      <Link to={`/game/${game.id}`}>
        <motion.h3 layoutId={`title ${stringId}`}>{game.name}</motion.h3>
        <p>{game.released}</p>
        <motion.img
          layoutId={`image ${stringId}`}
          src={smallImage(game.background_image, 640)}
          alt={game.name}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.25);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
