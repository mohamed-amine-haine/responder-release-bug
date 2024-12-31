import * as React from 'react';
import { StyleSheet, View } from 'react-native';

function App(): React.JSX.Element {
  return (
    <View
      style={styles.container}
      onStartShouldSetResponder={() => true}
      onMoveShouldSetResponder={() => true}
      onResponderRelease={e => console.log({ status: "release", touches: e.nativeEvent.touches.length, touchesChanged: e.nativeEvent.changedTouches.length })} />
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
});

export default App;
