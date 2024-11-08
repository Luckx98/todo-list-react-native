import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 100
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7C2D92',
    marginBottom: 20
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#7C2D92',
    borderRadius: 8
  },
  button: {
    padding: 8,
    backgroundColor: '#7C2D92',
    borderRadius: 8,
    width: '80%',
    marginTop: 10,
    marginBottom: 20
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18
  },
  taks: {
    backgroundColor: 'white',
    padding: 10,
    borderWidth: 1,
    borderColor: '#7C2D92',
    borderRadius: 8,
    marginBottom: 10
  },
  hiddenButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1
  },
  buttonsAlign: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  iconButtonEdit: {
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderColor: '#42A244',
    borderWidth: 1,
    borderRadius: 8
  },
  iconButtonDelete: {
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderColor: '#ce2828',
    borderWidth: 1,
    borderRadius: 8
  }
})
