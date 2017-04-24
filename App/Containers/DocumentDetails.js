import React from 'react'
import { ScrollView, Text, View, TouchableOpacity, Modal, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Metrics from '../Metrics'

class DocumentDetails extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      modalVisible: false
    }
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.detailsContent}>
          <Text style={styles.title}>{this.props.document.title}</Text>
          {this.props.document.body.map((paragraph) => (
            <TouchableOpacity key={paragraph} onPress={() => { this.setModalVisible(true) }}>
              <Text style={styles.paragraph}>{paragraph}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.state.modalVisible}
        >
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback onPress={() => { this.setModalVisible(!this.state.modalVisible) }}>
              <View style={styles.overlay} />
            </TouchableWithoutFeedback>

            <View style={styles.modal}>
              <Text>Hello World!</Text>
            </View>
          </View>
        </Modal>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight
  },
  detailsContent: {
    padding: 15,
    flex: 1
  },
  paragraph: {
    marginBottom: Metrics.baseMargin,
    lineHeight: 30,
    fontSize: 18
  },
  title: {
    fontSize: 25,
    lineHeight: 30,
    fontWeight: 'bold',
    marginBottom: Metrics.baseMargin
  },
  modalContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  modal: {
    backgroundColor: 'white',
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 100
  },
  overlay: {
    flexGrow: 1
  }
})

export default DocumentDetails
