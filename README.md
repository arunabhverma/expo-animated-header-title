# Expo Animated Header Title Demo

This project demonstrates GitHub-style animated header titles for Android and iOS, inspired by the header animations in the [GitHub mobile app](https://github.com/mobile). Built using [Expo](https://expo.dev/) and [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/), this example project showcases how to implement smooth, scroll-based animations for header titles that can be used in mobile apps.

## Demo

Check out the animated header title in action 👇:

| Android                                                                                                                        | iOS                                                                                                                        |
|--------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
|<video src="https://github.com/user-attachments/assets/23d8285f-7672-43ef-96d2-790c19b989b2" /> | <video src="https://github.com/user-attachments/assets/505e18a8-cfdf-4487-9735-1b53ef41a417" /> |


## Features

- **Cross-Platform Support**: The animated header title works on both Android and iOS, with consistent behavior across platforms.
- **Scroll-Based Animation**: Header title animates smoothly based on scroll position, creating a dynamic user experience.
- **GitHub-Style Behavior**: Mimics the exact animation behavior found in GitHub's mobile app's header.
- **Context-Based State**: Shared scroll values across components for efficient state management.

## How It Works

- **Scroll Detection**: The app captures scroll events using `useAnimatedScrollHandler` and updates shared values in the scroll context.

- **Animation Calculation**: The header title position is calculated using interpolation based on the current scroll position. The animation threshold is controlled by the `extraSpace` and `titleHeight` values.

- **Smooth Transitions**: The title smoothly translates vertically as the user scrolls, creating the illusion that it's moving with the content.

- **Navigation Integration**: Uses the headerTitle option from navigation to inject a custom component, bringing the animated header title style directly into the native navigation header.

### Note:

This project is not a standalone library; it's simply a demo or example implementation. However, if you're interested in building a library on top of this code, that would be greatly appreciated! Contributions are welcome—whether it's a bug fix, a new feature, or general improvements. Feel free to submit a pull request (PR) if you would like to contribute.

## Acknowledgments

- **[Expo](https://expo.dev/)**: For simplifying cross-platform mobile development.
- **[Reanimated](https://docs.swmansion.com/react-native-reanimated/)**: For powering the animations that make this header title interactive and fluid.
- **[Expo Router](https://docs.expo.dev/versions/latest/sdk/router/)**: For providing the navigation framework that enables header customization.
- **[GitHub Mobile Team](https://github.com/mobile)**: For the original design inspiration.

Feel free to contribute! ❤️
