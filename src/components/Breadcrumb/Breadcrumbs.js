import React from 'react'
import {Route} from 'react-router-dom'
import {Breadcrumb} from 'reactstrap'
import BreadcrumbsItem from './BreadcrumbsItem'

const getPaths = (pathname) => {
  const paths = ['/']

  if (pathname === '/') return paths

  pathname.split('/').reduce((prev, curr, index) => {
    const currPath = `${prev}/${curr}`
    paths.push(currPath)
    return currPath
  })
  return paths
}

const Breadcrumbs = ({"location": {pathname}, match, ...rest}) => {
  const paths = getPaths(pathname)
  let index = 0
  const items = paths.map((path) => {
    index += 1
    return (
      <Route
          key={index}
          path={path}
          component={BreadcrumbsItem}
      />
    )
  })
  return (
    <Breadcrumb>
      {items}
    </Breadcrumb>
  )
}

export default Breadcrumbs
