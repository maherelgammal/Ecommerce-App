import React from 'react';
import DotDensityMap from '../DotDensityMap/DotDensityMap';
import { Helmet } from 'react-helmet'

function Map() {
  return <>
    <Helmet>
      <title>Map</title>
    </Helmet>
    <DotDensityMap />;
  </>

}

export default Map;

