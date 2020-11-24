import React from 'react'
import {Link} from 'react-router-dom'
import {BreadcrumbItem} from 'reactstrap'
import routes from '../../routes'

const findRouteName = (url) => routes[url]

const BreadcrumbsItem = ({match, ...rest}) => {
  const routeName = findRouteName(match.url)
  if (routeName) {
    return (
      match.isExact
        ? (
          <BreadcrumbItem active>
            {routeName}
          </BreadcrumbItem>
        )
        : (
          <BreadcrumbItem>
            <Link to={match.url || ''}>
              {routeName}
            </Link>
          </BreadcrumbItem>
        )
    )
  }
  return null
}

export default BreadcrumbsItem
