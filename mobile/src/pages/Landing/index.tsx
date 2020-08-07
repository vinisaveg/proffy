import React from "react"
import { SafeAreaView, View, Image, Text, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { RectButton } from "react-native-gesture-handler"

import studyIcon from "../../assets/images/icons/study.png"
import giveClassesIcon from "../../assets/images/icons/give-classes.png"
import heartIcon from "../../assets/images/icons/heart.png"

import styles from "./styles"

import landingImage from "../../assets/images/landing.png"

const Landing = () => {
  const navigation = useNavigation()

  function handleNavigateToGiveClassesPage() {
    navigation.navigate("GiveClasses")
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={landingImage} style={styles.banner} />

      <Text style={styles.title}>
        Seja bem-vindo, {"\n"}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton style={[styles.button, styles.buttonPrimary]}>
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton style={[styles.button, styles.buttonSecondary]} onPress={handleNavigateToGiveClassesPage}>
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>Dar aulas</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnectons}>
        Total de 158 conexões já realizadas. <Image source={heartIcon} />
      </Text>
    </SafeAreaView>
  )
}

export default Landing
