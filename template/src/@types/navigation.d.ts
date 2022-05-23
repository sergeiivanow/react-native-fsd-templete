declare module AppNavigation {
  export type Root = {
    welcome: import('@react-navigation/native').NavigatorScreenParams<WelcomeNavigator>
    main: import('@react-navigation/native').NavigatorScreenParams<MainNavigator>
  }

  export type RootStackScreenProps<T extends keyof Root> =
    import('@react-navigation/native-stack').NativeStackScreenProps<Root, T>

  export type WelcomeNavigator = {
    login: undefined
  }

  export type MainNavigator = {
    home: undefined
    settings: undefined
  }

  export type Screens = keyof MainNavigator | keyof WelcomeNavigator
}
