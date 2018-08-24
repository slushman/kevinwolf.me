import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const Link = ({ children, to, ...other }) =>
  /^\/(?!\/)/.test(to) ? (
    <GatsbyLink to={to} {...other}>
      {children}
    </GatsbyLink>
  ) : (
    <OutboundLink href={to} target='_blank' {...other}>
      {children}
    </OutboundLink>
  )

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Link
