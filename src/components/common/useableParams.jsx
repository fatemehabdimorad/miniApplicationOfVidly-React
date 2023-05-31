import { useParams } from "react-router-dom";
const UsableParams = () => {
  const { movieId } = useParams();
  return movieId;
};

export default { UsableParams };
