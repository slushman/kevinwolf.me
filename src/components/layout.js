import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import 'confetti-js'

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  componentDidMount () {
    /* global ConfettiGenerator */
    this.canvas = new ConfettiGenerator({
      animate: true,
      clock: '1',
      colors: [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]],
      max: '50',
      props: ['circle', 'line', 'triangle'],
      size: '1',
      target: 'confetti-canvas'
    })

    this.canvas.render()
  }

  componentWillUnmount () {
    this.canvas.clear()
  }

  render () {
    return (
      <StaticQuery
        query={graphql`
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `}
        render={({ site }) => (
          <div
            css={`
              align-items: center;
              display: grid;
              grid-gap: 40px;
              grid-template-columns: 1fr;
              margin: 0 auto;
              max-width: 560px;
              min-height: 100vh;
              padding: 40px;

              & > * {
                justify-self: center;
              }
            `}
          >
            {/* Headers. */}
            <Helmet defaultTitle={site.siteMetadata.title} titleTemplate={`%s`}>
              <html lang='en' />
              <meta charSet='utf-8' />
              <meta name='msapplication-TileColor' content='#da532c' />
              <meta name='theme-color' content='#ffffff' />
              <meta
                name='description'
                content={site.siteMetadata.description}
              />
              <link
                rel='apple-touch-icon'
                sizes='180x180'
                href='/apple-touch-icon.png'
              />
              <link
                rel='icon'
                type='image/png'
                sizes='32x32'
                href='/favicon-32x32.png'
              />
              <link
                rel='icon'
                type='image/png'
                sizes='16x16'
                href='/favicon-16x16.png'
              />
              <link rel='manifest' href='/site.webmanifest' />
              <link
                rel='mask-icon'
                href='/safari-pinned-tab.svg'
                color='#5bbad5'
              />
            </Helmet>

            {/* Animated confetti background. */}
            <canvas
              id='confetti-canvas'
              css={`
                bottom: 0;
                left: 0;
                opacity: 0.5;
                position: fixed;
                right: 0;
                top: 0;
                z-index: -1;
              `}
            />

            {/* Page content. */}
            {this.props.children}
          </div>
        )}
      />
    )
  }
}

export default Layout
