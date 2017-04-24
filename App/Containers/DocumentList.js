import React from 'react'
import { View, Text, ListView, TouchableOpacity, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Metrics from '../Metrics'

class DocumentList extends React.Component {
  constructor (props) {
    super(props)

    fetch('http://localhost:4000/documents').then((response) => {
      return response.json()
    }).then((responseJson) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseJson.data)
      })
    }).catch((error) => {
      console.error(error)
    }).done()

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    }
  }

  openDocument = (document) => {
    Actions.documentDetails({
      document: document
    })
  }

  renderDocument = (document) => {
    return (
      <TouchableOpacity onPress={() => this.openDocument(document)}>
        <View style={styles.row}>
          <Text style={styles.title}>
            {document.title.map((titlePart) => (
              titlePart.base
            ))}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderDocument}
          pageSize={10}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight
  },
  row: {
    flex: 1,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#ebebeb',
    padding: 15
  },
  title: {
    fontSize: 20,
    lineHeight: 25
  }
})

export default DocumentList

