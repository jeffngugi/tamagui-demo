import React, { useState } from 'react'
import { Checkbox, XStack, Text } from 'tamagui'
import { Check as CheckIcon } from '@tamagui/lucide-icons'

const CheckboxDemo = () => {
  const [checked, setChecked] = useState(true)
  return (
    <XStack width={300} space={'$base'} alignItems='center'>
        <Checkbox native size={'$height'} checked={checked} onCheckedChange={()=>setChecked(!checked)}>
        <Checkbox.Indicator>
          <Text>T</Text>
        </Checkbox.Indicator>
        </Checkbox>
        <Text color={'$blue'}>Hello</Text>
    </XStack>
  )
}

export default CheckboxDemo
