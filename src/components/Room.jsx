import {
  useParams
} from "react-router-dom";

import styled from 'styled-components';


function Room() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  const { roomName } = useParams();

  return (
    <div>
      <h3>Room Name: {roomName}</h3>
    </div>
  );
}

export default Room;
