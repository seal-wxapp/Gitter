import Taro, { Component } from '@tarojs/taro'
import { View, Navigator, Image, Text } from '@tarojs/components'

import './about.less'

class About extends Component {

  config = {
    navigationBarTitleText: 'About'
  }

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  logout() {

    Taro.showModal({
      content: 'Are you sure?',
      showCancel: true,
      cancelText: 'No',
      cancelColor: '#7f7f7f',
      confirmText: 'Yeah',
      confirmColor: '#2d8cf0',
      success(res) {
        if (res.confirm) {
          Taro.setStorageSync('Authorization', '')
          Taro.setStorageSync('userInfo', null)
          Taro.navigateBack()
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

  }

  render () {
    let api = 'https://api.github.com/repos/huangjianke/Gitter'
    let url = '/pages/repo/repo?url=' + decodeURI(api)
    return (
      <View className='content'>
        <Image mode='aspectFit'
               className='logo'
               src={require('../../assets/images/logo.png')}/>
        <Text className='version'>
          Gitter v1.0.0
        </Text>
        <Navigator url={url}>
          <Text className='link'>
            https://github.com/huangjianke/Gitter
          </Text>
        </Navigator>
        <View className='logout' onClick={this.logout.bind(this)}>
          Logout
        </View>
      </View>
    )
  }
}

export default About
