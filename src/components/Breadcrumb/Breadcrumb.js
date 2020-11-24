import React from 'react'
import {Route} from 'react-router-dom'
import Breadcrumbs from './BreadcrumbsItem'

const Breadcrumb = (props) => (
  <div>
    <Route path="/:path" component={Breadcrumbs} {...props} />
  </div>
)

export default Breadcrumb
