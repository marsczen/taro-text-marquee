import { useRef, useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { useInterval } from './utils'
import './index.less'

export const Marquee = (props) => {
  const content = props.content
  const [index, setIndex] = useState(-1)
  const [height, setHeight] = useState(1)
  const [marqueeStyle, setMarqueeStyle] = useState({
    transform: 'translateY(0)',
    transition: 'transform 1s',
  })
  const marqueeRef = useRef(null)

  useInterval(() => {
    if (!marqueeRef || !marqueeRef.current) return

    Taro.createSelectorQuery()
      .select('#marquee_content')
      .boundingClientRect(function (rect) {
        setHeight(rect.height)
      })
      .exec()

    const translateYItem = Math.floor(height / (content.length + 1))
    const nextIndex = index + 1
    setMarqueeStyle({
      ...marqueeStyle,
      transform: `translateY(-${translateYItem * nextIndex}px)`,
      transition: 'transform 1s',
    })

    if (index >= content.length - 1) {
      setTimeout(() => {
        setIndex(0)
        setMarqueeStyle({
          ...marqueeStyle,
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
          className="marquee-content"
          ref={marqueeRef}
          id="marquee_content"
          style={'transform:' + marqueeStyle.transform + ';transition:' + marqueeStyle.transition}
        >
          {content.concat(content[0]).map((item, i) => (
            <View key={`${item}-${i}`} className="marquee-content-item">
              {item?.icon && <Image src={item.icon}></Image>}
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
