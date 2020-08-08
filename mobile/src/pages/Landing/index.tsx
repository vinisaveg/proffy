import React, { useState, useEffect } from "react"
import { SafeAreaView, View, Image, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { RectButton } from "react-native-gesture-handler"

import studyIcon from "../../assets/images/icons/study.png"
import giveClassesIcon from "../../assets/images/icons/give-classes.png"
import heartIcon from "../../assets/images/icons/heart.png"
import landingImage from "../../assets/images/landing.png"

import styles from "./styles"

import api from "../../services/api"

const Landing = () => {
  const navigation = useNavigation()

  const [totalConnections, setTotalConnections] = useState(0)

  useEffect(() => {
    api.get("connections").then((response) => {
      const { total } = response.data

      setTotalConnections(total)
    })
  })

  function handleNavigateToGiveClassesPage() {
    navigation.navigate("GiveClasses")
  }

  function handleNavigationToStudyPage() {
    navigation.navigate("Study")
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={landingImage} style={styles.banner} />

      <Text style={styles.title}>
        Seja bem-vindo, {"\n"}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton onPress={handleNavigationToStudyPage} style={[styles.button, styles.buttonPrimary]}>
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton style={[styles.button, styles.buttonSecondary]} onPress={handleNavigateToGiveClassesPage}>
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>Dar aulas</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnectons}>
        Total de {totalConnections} conexões já realizadas. <Image source={heartIcon} />
      </Text>
    </SafeAreaView>
  )
}

export default Landing
