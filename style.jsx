import {
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
  } from '@react-navigation/native';
  import {
    DarkTheme as PaperDarkTheme,
    DefaultTheme as PaperDefaultTheme,
  } from 'react-native-paper';
  import merge from 'deepmerge';
  
  
  const MyDarkTheme = {
      ...PaperDarkTheme,
      primary: '#01a8cf',
        accent: '#01a8cf',
    }
    
    const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
    const CombinedDarkTheme = merge(MyDarkTheme, NavigationDarkTheme);

  
export { CombinedDefaultTheme, CombinedDarkTheme };