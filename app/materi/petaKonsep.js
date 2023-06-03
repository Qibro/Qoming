import React from 'react';
import { DisplayImage } from '../../components';
import { petaKonsep } from '../../assets/images';

const index = () => (
  <DisplayImage data={[petaKonsep.materi.materi1, petaKonsep.materi.materi2, petaKonsep.materi.materi3]} />
);

export default index;
