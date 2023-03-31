declare module AppNavigation {
  export type Root = {
    [key in
      | import('../shared/config/routing').NavigatorRoutes.Welcome
      | import('../shared/config/routing').NavigatorRoutes.Main]: import('@react-navigation/native').NavigatorScreenParams<
      key extends import('../src/navigation/routes').NavigatorRoutes.Welcome
        ? WelcomeNavigator
        : MainNavigator
    >
  }

  export type RootStackScreenProps<T extends keyof Root> =
    import('@react-navigation/native-stack').NativeStackScreenProps<Root, T>

  // Navigators start

  type WelcomeNavigator = {
    [key in import('../src/navigation/routes').ScreenRoutes.Login]: undefined
  }

  type MainNavigator = {
    [key in
      | import('../src/navigation/routes').ScreenRoutes.Home
      | import('../src/navigation/routes').ScreenRoutes.Settings]: undefined
  }

  // Navigators end

  export type Navigators = import('../src/navigation/routes').NavigatorRoutes
  export type Screens = import('../src/navigation/routes').ScreenRoutes

  export type NavigationProps =
    import('@react-navigation/native').NavigationProp<
      Root & WelcomeNavigator & MainNavigator
    >
}
