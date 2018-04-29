import * as React from 'react';

interface Props {
  name: string;
  job: string;
}

const Person: React.SFC<Props> = ({ name, job }) => {
  return (
    <div className="person">
      {name} | {job}
    </div>
  );
};

export default Person;