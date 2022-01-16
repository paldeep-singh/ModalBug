/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Provider, Portal, Button, Modal} from 'react-native-paper';
import {Text} from 'react-native';

const App = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const showModal1 = () => setVisible1(true);
  const hideModal1 = () => setVisible1(false);

  const showModal2 = () => setVisible2(true);
  const hideModal2 = () => setVisible2(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible1}
          onDismiss={hideModal1}
          contentContainerStyle={containerStyle}
          dismissable>
          <Text>
            Example Modal with short text. Will NOT dismiss when outside is
            clicked with VoiceOver on.
          </Text>
          <Button style={{marginTop: 30}} mode="contained" onPress={hideModal1}>
            Close Modal
          </Button>
        </Modal>
        <Modal
          visible={visible2}
          onDismiss={hideModal2}
          contentContainerStyle={containerStyle}
          dismissable>
          <Text>
            Example Modal with long text. Will successfully dismiss when outside
            is clicked with VoiceOver on. Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book.
          </Text>
          <Button style={{marginTop: 30}} mode="contained" onPress={hideModal2}>
            Close Modal
          </Button>
        </Modal>
      </Portal>
      <Button style={{marginTop: 200}} onPress={showModal1} mode="contained">
        Show Modal with short text
      </Button>
      <Button style={{marginTop: 200}} onPress={showModal2} mode="contained">
        Show Modal with long text
      </Button>
    </Provider>
  );
};

export default App;
