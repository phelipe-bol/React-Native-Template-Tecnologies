// import configureStore from 'redux-mock-store';
// const mockStore = configureStore([]);

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');
jest.mock('react-native-html-to-pdf', () => 'RNHTMLtoPDF');
jest.mock('react-native-fs', () => 'RNFS');
jest.mock('react-native-share', () => 'Share');
jest.mock('react-native-image-picker', () => '{launchImageLibrary}');

jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: jest.fn(() => ({
    Navigator: 'MockStackNavigator',
    Screen: 'MockStackScreen',
  })),
}));

// jest.mock('react-redux', () => {
//   return {
//     useSelector: jest.fn(),
//     useDispatch: jest.fn(),
//   };
// });
