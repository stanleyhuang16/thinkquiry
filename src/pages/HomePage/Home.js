import React from 'react';
import { InfoSection, RoomNavSection } from '../../components';
import { homeObjOne } from './Data';

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <RoomNavSection />
    </>
  );
};

export default Home;
