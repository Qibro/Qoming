export const Colors = {
  background: '#2196F2FF',
  blue: '#00BCD3FF',
  logoBlue: '#30AFF2',
  black: '#444444FF',
  white: '#fff',
  purple: '#3F51B5FF',
  transparent: 'transparent',
  shadowColor: '#000',
  pink: '#9C27B0FF',
  wrong: '#FF0000',
  correct: '#8BC24A',
  darkPurple: '#7B3E8B',
  drawerBackground: '#30AFF2',
};

export const GlobalStyle = {
  shadow: (value) => ({
    shadowColor: Colors.shadowColor,
    shadowOffset: { width: 0, height: value },
    shadowOpacity: 0.1,
    shadowRadius: value,
    elevation: value,
  }),
};
