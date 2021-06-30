import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList  } from 'react-native'
import { COLORS, SIZES, FONTS, icons } from '../constants'
const TransectionHistory = ({customContainerStyle, history}) => {
    const renderItem = ({ item, index }) => (
        <TouchableOpacity
          style={{
            flexDirection:'row',
            paddingVertical: SIZES.padding,
            alignItems:'center'
          }}
          onPress={()=>console.log('history')}
        >
              <Image
                source={item.transaction}
                style={{
                  width: 30,
                  height: 30,
                  tintColor:COLORS.primary
                }}
              />
              <View style={{flex:1, marginLeft:SIZES.radius}}>
               <Text style={{...FONTS.h3}}>{item.description}</Text>
               <Text style={{color:COLORS.gray, ...FONTS.body4}}>{item.date}</Text>
              </View>
        </TouchableOpacity>
      );
    return (
      <View 
      style={{
      
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          padding:20,
          backgroundColor:COLORS.white,
          borderRadius:SIZES.radius,
          ...customContainerStyle,

      }}>
      <Text style={{...FONTS.h2}}>Transection History</Text>
      <FlatList
              contentContainerStyle={{ marginTop: SIZES.base }}
              scrollEnabled={false}
              data={history}
              renderItem={renderItem}
              keyExtractor={(item) => `${item.id}`}
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => {
                  return(
                      <View style={{
                          width:'100%',
                          height:1,
                          backgroundColor:COLORS.lightGray
                      }}></View>
                  )
              }}
            />
      </View>
    )
}

const styles = StyleSheet.create({
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

export default TransectionHistory
