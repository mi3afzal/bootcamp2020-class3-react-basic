import React from 'react';

function Link(props)
{
    return(
        <a
          className="App-link"
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.text}
        </a>
    );
}

export default Link;