import React from 'react';
import { globals } from '../globals';
import { styled } from 'styled-components';

const FooterBar = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 3rem;
  background: ${globals.colours.black};
  font-size: 1.2rem;
  font-weight: 600;
  width: 100%;
  height: 70px;

  a {
    color: #fff;
    padding: 15px;
    text-decoration: none;
  }

  p {
    margin: 0;
    padding: 15px;
    font-size: 1rem;
  } 
`

export const Footer: React.FC = () => (
  <FooterBar>
    <p>{`© ${globals.yourName} ${new Date().getFullYear()}`}</p>
    <a href="/rss.xml">
      <img src="/img/rss-white.svg" alt="RSS Feed" height="20" width="20" />
    </a>
  </FooterBar>
);
