import react, { useState, useEffect } from "react"
import { View, Text, Button, StyleSheet } from "react-native"

export default function Counter() {
  // let count = 0
  const [count, setCount] = useState(0)
  const [newCount, setNewCount] = useState(0)

  useEffect(() => {
    console.log(`count changed ${count}`)
    return () => {
      console.log('useeffect cleanup')
    }
  }, [count])
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`count: ${count}`}</Text>
      <Text style={styles.title}>{`new count: ${newCount}`}</Text>
      <Button
        color={"red"}
        title={"increase count"}
        onPress={() => setCount(count + 1)}
      />
      <Button
        color={"green"}
        title={"decrease count"}
        onPress={() => setCount(count - 1)}
      />
      <Button
        color={"red"}
        title={"increase count"}
        onPress={() => setNewCount(newCount + 1)}
      />
      <Button
        color={"green"}
        title={"decrease count"}
        onPress={() => setNewCount(newCount - 1)}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange"
  },
  title: {
    alignSelf: "center",
    fontSize: 25,
    marginTop: 25
  }
})
