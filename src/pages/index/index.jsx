import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtAvatar } from 'taro-ui'
export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '首页'
  }

  render () {
    return (
      <View className='index'>
        <AtAvatar className='atavatar' circle text='头像' image='https://jdc.jd.com/img/200'></AtAvatar>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
