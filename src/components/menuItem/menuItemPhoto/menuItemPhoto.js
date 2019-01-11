import React from 'react'
import styled from 'styled-components'

import menuItemPhotoEnhancer from './menuItemPhotoEnhancer'

const Container = styled.div`
  width: 260px;
  height: 170px;
  background-image: url(${p => p.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`
const MenuItem = ({ data }) => {
  const Image = data && data.img && data.img.full
  return <Container src={Image} />
}
export default menuItemPhotoEnhancer(MenuItem)
