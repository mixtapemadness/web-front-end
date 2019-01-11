import React from 'react'

export default ({ width, height, color }) => (
  <svg
    version="1.1"
    id="Capa_1"
    x="0px"
    y="0px"
    viewBox="0 0 510 510"
    style={{ width: `${width}`, height: `${height}` }}
  >
    <g>
      <g id="check-circle-blank">
        <path
          d="M255,0C114.75,0,0,114.75,0,255s114.75,255,255,255s255-114.75,255-255S395.25,0,255,0z"
          style={{ fill: `${color}` }}
        />
      </g>
    </g>
  </svg>
)
