import { useState } from 'react'
import {
  KeyboardAvoidingView,
  LayoutAnimation,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import { IconButton, List } from 'react-native-paper'
import { SwipeListView } from 'react-native-swipe-list-view'

import { styles } from './styles'

const HomeScreen = () => {
  const [items, setItems] = useState<any>([])
  const [inputValue, setInputValue] = useState('')
  const [editingItem, setEditingItem] = useState(null)

  const saveEditedItem = () => {
    const updatedItems = items.map((i) => (i === editingItem ? { ...i, text: inputValue } : i))
    setItems(updatedItems)
    setEditingItem(null)
    setInputValue('') // Limpa o campo de entrada após salvar
  }

  const handleEditItem = (item) => {
    setEditingItem(item) // Salva o item que está sendo editado
    setInputValue(item.text) // Coloca o texto no campo de entrada
  }

  const handleAddItem = () => {
    if (inputValue.trim()) {
      const newItem = { key: `${items.length}`, text: inputValue }
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
      setItems([...items, newItem])
      setInputValue('')
    }
  }

  const deleteItem = (item) => {
    const newItems = items.filter((i) => i !== item)
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    setItems(newItems)
  }

  const renderHiddenItems = (data) => {
    return (
      <View style={styles.hiddenButtonsContainer}>
        <View></View>
        <View style={styles.buttonsAlign}>
          <IconButton
            style={styles.iconButtonEdit}
            onPress={() => handleEditItem(data.item)}
            icon="check"
            size={20}
          />
          <IconButton
            style={styles.iconButtonDelete}
            icon="delete"
            size={20}
            iconColor="#ce2828"
            onPress={() => {
              deleteItem(data.item)
            }}
          />
        </View>
      </View>
    )
  }

  const renderItems = ({ item }) => {
    return <List.Item key={item.key} style={styles.taks} title={item.text} />
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Adjust behavior based on platform
    >
      <View style={styles.container}>
        <Text style={styles.title}>To do App</Text>
        <TextInput
          style={styles.input}
          placeholder="Add a new task"
          value={inputValue}
          onChangeText={setInputValue}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={editingItem ? saveEditedItem : handleAddItem}
          disabled={!inputValue.trim()}
        >
          <Text style={styles.buttonText}>{editingItem ? 'Edit' : 'Add item'}</Text>
        </TouchableOpacity>
        <SwipeListView
          style={{ width: '80%' }}
          data={items}
          renderItem={renderItems}
          renderHiddenItem={renderHiddenItems}
          rightOpenValue={-100}
        />
      </View>
    </KeyboardAvoidingView>
  )
}

export default HomeScreen
