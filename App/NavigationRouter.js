import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'

import DocumentList from './Containers/DocumentList'
import DocumentDetails from './Containers/DocumentDetails'

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='root'>
          <Scene initial key='documentList' component={DocumentList} title='Kaminari' />
          <Scene key='documentDetails' component={DocumentDetails} title='Kaminari' />
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
