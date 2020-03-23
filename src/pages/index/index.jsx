import Taro, {Component} from '@tarojs/taro'
import {View, Text, Image, Swiper, SwiperItem} from '@tarojs/components'
import './index.scss'
import {AtTabBar, AtAvatar, AtFab} from 'taro-ui'

export default class Index extends Component {

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  config = {
    navigationBarTitleText: '首页'
  }

  constructor() {
    super(...arguments)
    this.state = {
      current: 0,
      IndexIcon: require('../../images/home.png'),
    }
  }

  onButtonClick() {
    console.log(this)
  }

  handleClick(value) {
    this.setState({
      current: value,
      imgs: ['https://jdc.jd.com/img/400', 'https://jdc.jd.com/img/200', 'https://jdc.jd.com/img/800'],
    })
  }

  render() {
    return (
      <View className='index'>
        <Swiper
          className='test-h'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay
        >

          <SwiperItem>
            <View className='demo-text-1'><Image src={}/></View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-2'>2</View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-3'>3</View>
          </SwiperItem>
        </Swiper>
        <AtAvatar className='atavatar' circle text='头像' image='https://jdc.jd.com/img/200'></AtAvatar>
        <Text className='qqq'>Hello world!</Text>
        <AtFab className='top' onClick={this.onButtonClick.bind(this)}>
          <Text className='at-fab__icon at-icon at-icon-menu'></Text>
        </AtFab>
        {/*<View><Image style='width: 300px;height: 100px;background: #fff;'*/}
        {/*  src={IndexIcon}*/}
        {/*/></View>*/}
        <AtTabBar
          fixed
          color='#000'
          selectedColor='#f00'
          tabList={[
            {
              title: '首页',
              image: 'https://dml-online.oss-cn-beijing.aliyuncs.com/attachment/sys/wx/home.png',
              selectedImage: 'https://dml-online.oss-cn-beijing.aliyuncs.com/attachment/sys/wx/home_active.png',
              text: 'new'
            },
            {
              title: '分类',
              image: 'https://dml-online.oss-cn-beijing.aliyuncs.com/attachment/sys/wx/classification.png',
              selectedImage: 'https://dml-online.oss-cn-beijing.aliyuncs.com/attachment/sys/wx/classification_active.png',
            },
            {
              title: '我的',
              image: 'https://dml-online.oss-cn-beijing.aliyuncs.com/attachment/sys/wx/my.png',
              selectedImage: 'https://dml-online.oss-cn-beijing.aliyuncs.com/attachment/sys/wx/my_active.png',
              text: '100',
              max: '99'
            }
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
      </View>
    )
  }
}
