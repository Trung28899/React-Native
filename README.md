# FOLDER THAT CONTAINS ALL REACT NATIVE MATERIALS:

## BASIC OF REACT NATIVE:

1. How does React Native works ?

JSX code (UI Element) in React Native >
The code will be compiled into IOS and Android Native UI components

Javascript logics in React Native will not be compiled,
The JavaScript logic is running on a JavaScript Thread which is hosted by
React Native in the native app that was built. The Thread that is built into the
production application will run the javascript code and talk to the native Android or
IOS system on the fly

2. Expo CLI vs React Native CLI:

a. React Native CLI:

    - Expo CLI is a 3rd party service
    - When using Expo, writing app is more convenient
    - You can switch your project from Expo CLI to React Native CLI anytime

b. React Native CLI:

    - Developed by React Native team & community
    - Bare-bone development, you'll need to setup some more
    - Less convenience features
    - Easier integration with native source code
    (java for android or swift with ios)

3. Helpful content:

Xcode signing
https://github.com/expo/fyi/blob/main/setup-xcode-signing.md

init app: $ npx create-expo-app appName
open xcode: $ xed ios
run on ios: $ npx expo run:ios --device
prebuild ios file: $ expo prebuild -p ios
