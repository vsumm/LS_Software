import React from 'react';
import { InfoSection } from '../../components';
import { homeObjOne, homeObjTwo } from './Data';
import Tabledata from './datefilter';
import Grid from './apidata';
import Fraction from './yolo';
import App from './cell_render/App'
import Player from './player';

function FHAD() {
  return (
    <>
      <InfoSection {...homeObjTwo} />
      <br></br>
      <Tabledata />
      <br />
      <br />
      <br />
      <Fraction />
      <br />
      <br />
      <App />
      <br />
      <br />
      <Player />
      <InfoSection {...homeObjOne} />
      <br />
      <br />

    </>
  );
}

export default FHAD;
