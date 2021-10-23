import React from 'react';
import { ScrollView } from 'react-native';

import { Message } from '../Message';

import { styles } from './styles';

export function MessageList() {
  const message = {
    id: '8',
    text: 'Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥',
    user: {
      name: 'Dianne Russell',
      avatar_url: 'https://uifaces.co/our-content/donated/n4Ngwvi7.jpg'
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />

    </ScrollView>
  );
}