import React from 'react';

const Clock = ({ width, height, color }) => (
  <svg
    version="1.1"
    id="Capa_1"
    x="0px"
    y="0px"
    viewBox="0 0 510 510"
    width={width}
    height={height}
    fill={color || '#666666'}
  >
    <g>
      <g id="access-time">
        <path
          style={{ fill: `${color}` }}
          d="M255,0C114.75,0,0,114.75,0,255s114.75,255,255,255s255-114.75,255-255S395.25,0,255,0z
          M255,459c-112.2,0-204-91.8-204-204S142.8,51,255,51s204,91.8,204,204S367.2,459,255,459z"
        />
        <polygon
          style={{ fill: `${color}` }}
          points="267.75,127.5 229.5,127.5 229.5,280.5 362.1,362.1 382.5,328.95 267.75,260.1"
        />
      </g>
    </g>
  </svg>
);

export default Clock;
