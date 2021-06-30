import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
  FlatList,
  LogBox
} from "react-native";
import { COLORS, FONTS, icons, dummyData, SIZES, images } from "../constants";
import PriceAlert from "../components/PriceAlert";
import TransectionHistory from '../components/TransectionHistory'

const Home = ({ navigation }) => {
  const [trending, setTrending] = useState(dummyData.trendingCurrencies);
  const [transectionHistory, setTransectionHistory] = useState(dummyData.transectionHistory);

  useEffect(()=>{
  LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
  },[])
  const renderHeader = () => {
    const renderItem = ({ item, index }) => (
      <TouchableOpacity
        style={{
          width: 180,
          paddingVertical: SIZES.padding,
          paddingHorizontal: SIZES.padding,
          marginLeft: index == 0 ? SIZES.padding : 0,
          marginRight: SIZES.radius,
          borderRadius: 10,
          backgroundColor: COLORS.white,
          ...styles.shadow,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image
              source={item.image}
              resizeMode="cover"
              style={{
                marginTop: 5,
                width: 25,
                height: 25,
              }}
            />
          </View>
          <View style={{ marginLeft: SIZES.base }}>
            <Text style={{ ...FONTS.h2 }}>{item.currency}</Text>
            <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
              {item.code}
            </Text>
          </View>
        </View>
        <View style={{ marginTop: SIZES.radius }}>
          <Text style={{ ...FONTS.h2 }}>${item.amount}</Text>
          <Text style={{ color: item.type == "I" ? COLORS.green : COLORS.red }}>
            {item.changes}
          </Text>
        </View>
      </TouchableOpacity>
    );
    return (
      <View style={{ width: "100%", height: 290, ...styles.shadow }}>
        <ImageBackground
          source={images.banner}
          resizeMode="center"
          style={{ flex: 1, alignItems: "center" }}
        >
          <TouchableOpacity
            style={{
              marginTop: SIZES.padding * 2,
              width: "100%",
              alignItems: "flex-end",
              paddingHorizontal: SIZES.padding,
            }}
            onPress={() => console.log("The notification has pressed!")}
          >
            <Image
              source={icons.notification_white}
              resizeMode="contain"
              style={{ flex: 1 }}
            />
          </TouchableOpacity>

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
              Your Portfolio Balance
            </Text>
            <Text
              style={{
                marginTop: SIZES.base,
                color: COLORS.white,
                ...FONTS.h1,
              }}
            >
              ${dummyData.portfolio.balance}
            </Text>
            <Text style={{ color: COLORS.white, ...FONTS.body5 }}>
              {dummyData.portfolio.changes}Last 24 hours
            </Text>
          </View>

          <View style={{ position: "absolute", bottom: "-30%" }}>
            <Text
              style={{
                marginLeft: SIZES.padding,
                color: COLORS.white,
                ...FONTS.h2,
              }}
            >
              Trending
            </Text>
            <FlatList
              contentContainerStyle={{ marginTop: SIZES.base }}
              data={trending}
              renderItem={renderItem}
              keyExtractor={(item) => `${item.id}`}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </ImageBackground>
      </View>
    );
  };
  const renderAlert = () => {
    return <PriceAlert />;
  };
  const renderNotice = () => {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          padding: 30,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.secondary,
          ...styles.shadow,
        }}
      >
        <Text style={{ color: COLORS.white, ...FONTS.h2 }}>
          Investing Safety
        </Text>
        <Text style={{ color: COLORS.white, ...FONTS.h5, lineHeight: 18 }}>
          It is very difficult time to invest incrypto-currency
        </Text>
        <TouchableOpacity
          style={{ marginTop: SIZES.base }}
          onPress={() => console.log("Learn More")}
        >
          <Text
            style={{
              color: COLORS.green,
              textDecorationLine: "underline",
              ...FONTS.h3,
            }}
          >
            Learn More
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  const renderTransectionHistory = () => {
   return(
      <TransectionHistory
      customContainerStyle={{...styles.shadow}}
      history={transectionHistory}
      />
   )
  }
  return (
    <ScrollView>
      <View style={{ flex: 1, paddingBottom: 130 }}>
        {renderHeader()}
        {renderAlert()}
        {renderNotice()}
        {renderTransectionHistory()}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});

export default Home;
