import Logo from './logo';
import React from 'react';
import styled from '@emotion/styled';
import {StaticQuery, graphql} from 'gatsby';

const Container = styled.div({
  display: 'flex',
  alignItems: 'center',
  fontSize: 18
});

const StyledLogo = styled(Logo)({
  marginRight: 8,
  height: 36,
  fill: 'currentColor'
});

export default function LogoTitle() {
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <Container>
          <StyledLogo />
          {data.site.siteMetadata.title}
        </Container>
      )}
    />
  );
}
