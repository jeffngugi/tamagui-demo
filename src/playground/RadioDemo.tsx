import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ListItem, RadioGroup, YGroup } from 'tamagui'

const selectables = [
    {id: 1, name: 'Jeff'},
    {id: 2, name: 'Ngugi'},
    {id: 3, name: 'Mwathi'},
    {id: 4, name: 'Kenya'},
]

const updateSelectedNodeId = (id) => console.log('Node is is', id)

const RadioDemo = () => {
    return (
          
            <ListItem gap="$4">
              <RadioGroup
                value={'2'}
                onValueChange={updateSelectedNodeId}
              >
                <RadioGroup.Item id={'local'} value={'local'} size={50}>
                  <RadioGroup.Indicator />
                </RadioGroup.Item>
              </RadioGroup>
              Local node
            </ListItem>
          )
    
  
}

export default RadioDemo

const styles = StyleSheet.create({})