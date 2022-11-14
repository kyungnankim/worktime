import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    margin: 0 auto;
    padding-top: 10px;
    text-align: center;
`
const Project = styled.span`
    color: #999;
    font-size: 12px;
    font-weight: normal;
    padding-right: 4px;
`
const Copyright = styled.span`
    color: #aaa;
    font-size: 12px;
    font-weight: normal;
`

function Footer() {
  return (
    <Container>
      <Project>© WorkTime</Project>
      <Copyright> All rights reserved by nany  </Copyright>
    </Container>
  )
}

export default Footer;
