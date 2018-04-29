import * as React from 'react';

interface Props {
  name: string;
  age: number;
  job: boolean;
}

const Person:React.SFC<Props> = ({ name, age, job }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h3>{ job ? 'Front-end Enginner' : 'Looking for a job' }</h3>
    </div>
  );
};

export default Person;