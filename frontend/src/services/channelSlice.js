import { createSlice } from '@reduxjs/toolkit'
import uniqueId from 'lodash/uniqueId.js';

// # message.id = uniqueId(); случайный id

const channelSlice = createSlice({
    name: 'channels',
    initialState: { 
      channels: {
        ids: ['general', 'random'],
        entities: {
          'general': { name: 'general', messagesIds: [] },
          'random': { name: 'random', messagesIds: [] },
        },
      },
    },
    reducers: {
      // редьюсер для добавления канала
      addChannel(state, { payload }) {
        const { name } = payload;
        // Проверяем, существует ли канал
        if (state.channels.entities[name]) {
          throw new Error(`Channel name "${name}" must be unique!`);
        }
        // Добавляем канал
        state.channels.entities[name] = { name, messages: [] };
        // Обновляем список индентификаторов
        state.channels.ids.push(name);
      },
      // редьюсер для удаления канала
      removeChannel: (state, { payload }) => {
        const { channelId } = payload;
      
        delete state.channels.entities[channelId];
        state.channels.ids = state.channels.ids.filter((id) => id !== channelId);
      
        // Удаляем все сообщения, относящиеся к этому каналу
        state.messages.ids = state.messages.ids.filter(
          (messageId) => state.messages.entities[messageId].channelId !== channelId
        );
        state.messages.entities = _.omitBy(state.messages.entities, (msg) => msg.channelId === channelId);
      },
      // редьюсер для переименования канала
      renameChannel(state, { payload }) {
        const { name, newName } = payload;
        if (state.channels.entities[newName]) {
          throw new Error(`Channel name "${name}" must be unique!`);
        }
        // Копируем данные старого канала в новый ключ
        state.channels.entities[newName] = {
          ...state.channels.entities[name],
          name: newName,
        };
        delete state.channels.entities[name];

        // Обновляем идентификатор в ids
        state.channels.ids = state.channels.ids.map((id) =>
        id === name ? newName : id
        );

        // Обновляем channelId в messages
        Object.values(state.messages.entities).forEach((message) => {
          if (message.channelId === oldName) {
            message.channelId = newName;
          }
        });
      },
      // редьюсер для добавления сообщения в канал
      addMessageToChannel(state, { payload }) {
        const { channelId, messageId } = payload;
        if (!state.channels.entities[channelId]) {
          throw new Error(`Channel "${channelId}" does not exist!`);
        }
        state.channels.entities[channelId].messageIds.push(messageId);
      },
    },
  });
  
  export const { addChannel, removeChannel, renameChannel, addMessageToChannel } = channelSlice.actions;
  export default channelSlice.reducer;