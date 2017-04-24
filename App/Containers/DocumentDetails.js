import React from 'react'
import { ScrollView, Text, View, TouchableOpacity, Modal, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Metrics from '../Metrics'

class DocumentDetails extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      modalVisible: false,
      word: {
        base: null,
        read: null
      }
    }
  }

  openModal = (word) => {
    this.setState({ modalVisible: true, word: word })
  }

  closeModal = () => {
    this.setState({ modalVisible: false })
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.detailsContent}>
          <Text style={styles.title}>
            {this.props.document.title.map((titlePart) => (
              titlePart.base
            ))}
          </Text>

          <View style={styles.paragraph}>
            {this.props.document.body.map((word, i) => (
              <TouchableOpacity key={i} onPress={() => { this.openModal(word) }}>
                <Text style={styles.word}>{word.base}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.state.modalVisible}
        >
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback onPress={() => { this.closeModal() }}>
              <View style={styles.overlay} />
            </TouchableWithoutFeedback>

            <View style={styles.modal}>
              <Text>{this.state.word.base}</Text>
              <Text>{this.state.word.read}</Text>
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
  word: {
    lineHeight: 30,
    fontSize: 24
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
  },
  paragraph: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})

export default DocumentDetails
