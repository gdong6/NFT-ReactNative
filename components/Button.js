import { TouchableOpacity, View, Text, Image } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { COLORS, FONTS, SHADOWS, SIZES } from '../constants'


export const CircleButton = ({imgUrL, handLePress, ...props}) => {
  return (
    <TouchableOpacity
			style={{
				width: 40,
				height: 40,
				backgroundColor: COLORS.white,
				position: 'absolute',
				borderRadius: SIZES.extraLarge,
				alignItems: 'center',
				justifyContent: 'center',
				...SHADOWS.light,
				...props,
			}}
			onPress={handLePress}
    >
			<Image 
				source={imgUrL}
				resizeMethod="contain"
				style={{ width: 24, height: 24 }}
			/>

    </TouchableOpacity>
  )
}

export const RectButton = ({minWidth, fontSize, handLePress, ...props}) => {
    return (
      <TouchableOpacity
				style={{
					backgroundColor: COLORS.primary,
					borderRadius: SIZES.extraLarge,
					minWidth: minWidth,
					padding: SIZES.small,
					...props,
				}}
				onPress={handLePress}
			>
				<Text style={{
					fontFamily: FONTS.semiBold,
					fontSize: fontSize,
					color: COLORS.white,
					textAlign: 'center'
				}}>
					Place a bid
				</Text>
			</TouchableOpacity>
    )
  }

