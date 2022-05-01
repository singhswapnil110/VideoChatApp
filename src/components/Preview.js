import { useParams } from "react-router-dom";

export const Preview = () => {
  const params = useParams();
  const roomID = params.roomID;
  return <div>Preview : {roomID}</div>;
};
