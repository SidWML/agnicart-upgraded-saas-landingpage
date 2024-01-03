import React from 'react';
import Typography from '../../generics/Typography';
import Grids from './Grids';

export default function GridSections({textGd,mainHeading,description}) {
  return (
        <div className=" text-center md:w-[80%] mx-auto space-y-4">
          <Typography type='Jumbotron' textGd={textGd} mainHeading={mainHeading} description={description} />
        </div>
  );
}
