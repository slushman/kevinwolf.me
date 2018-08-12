import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'

const Link = ({ children, to, ...other }) =>
  /^\/(?!\/)/.test(to) ? (
    <GatsbyLink to={to} {...other}>
      {children}
    </GatsbyLink>
  ) : (
    <a href={to} target='_blank' {...other}>
      {children}
    </a>
  )

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Link
