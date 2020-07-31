import React, { useState } from "react";
import { View, StyleSheet, FlatList, Dimensions, Animated } from "react-native";

import Item from "./Item";

const { width, height } = Dimensions.get("window");

const imagens = [
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Frevistagalileu.globo.com%2FCiencia%2FEspaco%2Fnoticia%2F2019%2F10%2Fimagem-feita-por-brasileiro-e-selecionada-como-foto-do-dia-pela-nasa.html&psig=AOvVaw0xu4DbrIazl9NrLykAkn_Q&ust=1596263894479000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNDTusHw9uoCFQAAAAAdAAAAABAD",
  "https://s2.glbimg.com/kuRU5wNsNZhTsYAYwdsGwt96Q9o=/0x0:976x549/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/Z/k/V0YjN0QDCq4BQiLqSj1w/bbcvialactea.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRA8mNC2_kF-g8N2PAItFmQh8iq71lXmGtJaA&usqp=CAU",
];
interface Props {}
const Carousel = () => {
  let position = Animated.divide(scrollX, width);
  const [data, setData] = useState<String[]>(imagens);
  if (data && data.length) {
    return (
      <View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => String(index)}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => <Item image={item} key={index} />}
        />
        <View style={styles.dotView}>
          {data.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp",
            });
            return (
              <Animated.View
                key={i}
                style={{
                  opacity,
                  height: 10,
                  width: 10,
                  background: "#595959",
                  margin: 8,
                  borderRadius: 5,
                }}
              />
            );
          })}
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  dotView: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default Carousel;
