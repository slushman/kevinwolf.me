import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'react-emotion'
import Img from 'gatsby-image'
import 'confetti-js'

import Layout from '../components/layout'
import Link from '../components/link'
import Icon from '../components/icon'

const SocialLink = styled(Link)`
  color: #bbb;
  display: inline-block;
  margin: 8px;
  transition: all 1s ease;

  &:hover {
    color: initial;
    transform: scale(1.3);
  }
`

const Index = () => (
  <StaticQuery
    query={graphql`
      {
        avatar: file(relativePath: { eq: "avatar.png" }) {
          childImageSharp {
            fixed(width: 150, height: 150) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
        home: markdownRemark(fileAbsolutePath: { regex: "/data/home.md/" }) {
          frontmatter {
            links {
              name
              url
              icon
            }
          }
          html
        }
      }
    `}
    render={({ avatar, home }) => (
      <Layout>
        {/* Avatar. */}
        <Img fixed={avatar.childImageSharp.fixed} />

        {/* About me. */}
        <div
          css={`
            text-align: center;
          `}
          dangerouslySetInnerHTML={{ __html: home.html }}
        />

        {/* Social links */}
        <div
          css={`
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            width: 100%;
          `}
        >
          {home.frontmatter.links.map(link => (
            <SocialLink key={link.name} to={link.url} title={link.name}>
              <Icon icon={link.icon} />
            </SocialLink>
          ))}
        </div>
      </Layout>
    )}
  />
)

export default Index
