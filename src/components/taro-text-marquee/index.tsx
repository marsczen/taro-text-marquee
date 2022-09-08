import { useRef, useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { useInterval } from '../../common/utils.ts'
import './index.scss'

export const Marquee = (props) => {
  //vertical  纵向滚动
  //horizontal 横向滚动
  const content = props.content
  const [index, setIndex] = useState(-1)
  const [height, setHeight] = useState(1)
  const [marqueeVerticalStyle, setMarqueeVerticalStyle] = useState({
    transform: 'translateY(0)',
    transition: 'transform 1s',
  })
  const marqueeVerticalRef = useRef(null)

  useInterval(() => {
    if (!marqueeVerticalRef || !marqueeVerticalRef.current) return

    Taro.createSelectorQuery()
      .select('#marquee_vertical')
      .boundingClientRect(function (rect) {
        setHeight(rect.height)
      })
      .exec()

    const translateYItem = Math.floor(height / (content.length + 1))
    const nextIndex = index + 1
    setMarqueeVerticalStyle({
      ...marqueeVerticalStyle,
      transform: `translateY(-${translateYItem * nextIndex}px)`,
      transition: 'transform 1s',
    })

    if (index >= content.length - 1) {
      setTimeout(() => {
        setIndex(0)
        setMarqueeVerticalStyle({
          ...marqueeVerticalStyle,
          transform: 'translateY(0px)',
          transition: 'transform 0s',
        })
      }, 1000)
    } else {
      setIndex(nextIndex)
    }
  }, 2000)

  return (
    <View className="marquee-container">
      <View className="marquee-wrapper">
        <View
          className="marquee-vertical"
          ref={marqueeVerticalRef}
          id="marquee_vertical"
          style={'transform:' + marqueeVerticalStyle.transform + ';transition:' + marqueeVerticalStyle.transition}
        >
          {content.concat(content[0]).map((item, i) => (
            <View key={`${item}-${i}`} className="marquee-vertical-item">
              {item?.icon && <Image className="icon" src={item.icon}></Image>}
              <Text className="title" style={item.color ? { color: item.color } : {}}>
                {item.title}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  )
}
export default Marquee
