import React from 'react';
import { Text } from 'react-native';
import Speedometer, {
  Indicator,
  Progress,
  Arc
} from "react-native-cool-speedometer";

const Circular = (data, max) => {
  const center = 250 / 2
  return (
    <Speedometer
      value={data}
      max={max}
      angle={180}
      lineCap="round"
      accentColor="orange"
    >
      <Arc arcWidth={40} />
      <Progress arcWidth={40} />
      <Indicator>
        {(value, textProps) => (
          <Text
            {...textProps}
            fontSize={60}
            fill="orange"
            x={center}
            y={center + 10}
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            {value}%
          </Text>
        )}
      </Indicator>
    </Speedometer>
  )
}

export default Circular;