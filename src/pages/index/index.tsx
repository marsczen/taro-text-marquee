import { Component } from "react";
import { View, Text } from "@tarojs/components";
import Marquee from "../../components/taro-text-marquee/index";
import noticeImg from "../../assets/notice.svg";
import "./index.scss";

const marqueeData = [
  {
    title: "春江潮水连海平，海上明月共潮生",
    icon: noticeImg,
    color: "#FF5500",
  },
  {
    title: "滟滟随波千万里，何处春江无月明",
    icon: noticeImg,
    color: "#FF5500",
  },
  {
    title: "江流宛转绕芳甸，月照花林皆似霰",
    icon: noticeImg,
    color: "#FF5500",
  },
  {
    title: "空里流霜不觉飞，汀上白沙看不见",
    icon: noticeImg,
    color: "#FF5500",
  },
  {
    title: "江天一色无纤尘，皎皎空中孤月轮",
    icon: noticeImg,
    color: "#FF5500",
  },
  {
    title: "江畔何人初见月？江月何年初照人",
    icon: noticeImg,
    color: "#FF5500",
  },
];
export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="notice">
        <View className="vertical">
          <Marquee content={marqueeData} direction="vertical" />
        </View>
        <View className="horizontal">
          <Marquee content={marqueeData} direction="horizontal" width="5000" />
        </View>
      </View>
    );
  }
}
