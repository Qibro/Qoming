import React from 'react';
import { DisplayImage } from '../../components';
import { kisahInspiratif } from '../../assets/images';

const index = () => (
  <DisplayImage data={[kisahInspiratif.kisahInspiratif1, kisahInspiratif.kisahInspiratif2, kisahInspiratif.kisahInspiratif3]} />
);

export default index;
