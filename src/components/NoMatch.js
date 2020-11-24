import React from 'react';

function NoMatch({search}) {

  return (
    <div>
      <h2>There are no recipes for {search}. Please try again!!</h2>
    </div>
  );
}

export default NoMatch;