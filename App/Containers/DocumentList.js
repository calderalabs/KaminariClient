import React from 'react'
import { View, Text, ListView, TouchableOpacity, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Metrics from '../Metrics'

class DocumentList extends React.Component {
  constructor (props) {
    super(props)

    const dataObjects = [
      {
        title: '熊本県で大きな地震が起こってから１年',
        body: [
          '去年の４月に熊本県で大きな地震がありました。地震が起こってから１年になる１４日、熊本県庁で亡くなった人のために祈る式がありました。亡くなった人の家族など、約３６０人が出席しました。',
          'この地震では５０人が壊れた建物の下になったりして亡くなりました。避難したあと体の具合が悪くなったりして亡くなった人も、４月１３日までに１６９人います。',
          '地震で壊れた家は２０万軒ありました。熊本県などは、家が壊れた人などがしばらく住む仮設住宅を建てたり、アパートを借りたりしています。仮設住宅などで生活を続けている人は、今も４万７０００人ぐらいいます。',
          '益城町にある仮設住宅では先月、６１歳の男性が１人で亡くなっているのが見つかりました。県や町などは、仮設住宅などに１人で住んでいる人に会いに行って、元気かどうか聞いたりしています。'
        ]
      },
      {
        title: ' 浅田真央さんのスケートの服を着た人形と切手のセット',
        body: [
          'フィギュアスケートの浅田真央さんは１２日、記者たちを集めて選手をやめる理由などを話しました。浅田さんは「やめることを発表してから、みなさんから温かい言葉をもらいました。スケートで学んだことを忘れないで、笑顔で前に進んでいきたいです」と言いました。',
          '郵便局は先月、浅田さんのスケートの服を着た人形と切手のセットの予約を始めました。浅田さんが選手をやめると言ってから予約が急に増えて、１１日は１５００セットの予約がありました。',
          '東京の千代田区にある東京中央郵便局には、浅田さんの写真や、サインが書いてあるＴシャツ、人形などが飾ってあります。３３歳の男性は「これから子どもが生まれるので、人形を買って浅田さんのことを教えたいです」と話していました。',
          '人形と切手のセットは１万２０００円で、来月まで予約できます。品物が届くのは今年の１１月からです。'
        ]
      }
    ]

    const rowHasChanged = (r1, r2) => r1 !== r2

    const ds = new ListView.DataSource({rowHasChanged})

    this.state = {
      dataSource: ds.cloneWithRows(dataObjects)
    }
  }

  openDocument = (rowData) => {
    Actions.documentDetails({
      document: rowData
    })
  }

  renderRow = (rowData) => {
    return (
      <TouchableOpacity onPress={() => this.openDocument(rowData)}>
        <View style={styles.row}>
          <Text style={styles.title}>{rowData.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
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

