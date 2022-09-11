# taro-text-marquee

taro滚动字幕效果

![此处输入图片的描述][1]

## Usage

```js
import React from 'react';
import Marquee from "../../components/taro-text-marquee/index";
import noticeImg from "../../assets/notice.svg";

class Demo extends React.Component {
  render() {
  const marqueeData = [
  {
    title: "春江潮水连海平，海上明月共潮生",
    icon: noticeImg,
    color: "#FF5500",
  },
];
    return (
      <View className="notice">
        <View className="vertical">
          <Marquee content={marqueeData} direction="vertical" />
        </View>
        <View className="horizontal">
          <Marquee content={marqueeData} direction="horizontal" width="5000" />
        </View>
      </View>
    )
  }
}
```


  [1]: https://raw.githubusercontent.com/marsczen/taro-text-marquee/master/assets/img.gif