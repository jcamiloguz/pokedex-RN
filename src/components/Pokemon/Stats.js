import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export function Stats({ stats }) {
  const barStyles = (num) => {
    const barColor = num < 49 ? '#ff3e3e' : '#00ac17'
    return {
      width: `${num}%`,
      backgroundColor: barColor,
    }
  }

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Stats</Text>
      {stats.map(({ stat, base_stat }, index) => (
        <View key={index} style={styles.block}>
          <View style={styles.blockTitle}>
            <Text style={styles.statName}>{stat.name}</Text>
          </View>
          <View style={styles.blockInfo}>
            <Text style={styles.number}>{base_stat}</Text>
            <View style={styles.bgBar}>
              <View style={[styles.bar, barStyles(base_stat)]}></View>
            </View>
          </View>
        </View>
      ))}
    </View>
  )
}
const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 5,
  },
  block: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  blockTitle: {
    width: '30%',
  },
  statName: {
    textTransform: 'capitalize',
    fontSize: 12,
    color: '#6b6b6b',
  },
  blockInfo: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  number: {
    width: '12%',
    fontSize: 12,
  },
  bgBar: {
    backgroundColor: '#dedede',
    width: '88%',
    height: 10,
    borderRadius: 20,
    overflow: 'hidden',
  },
  bar: {
    height: 10,
    borderRadius: 20,
  },
})
