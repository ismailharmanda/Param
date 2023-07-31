<h1 style="color:rgb(255,119,5);font-weight:bold;text-align:center" >Welcome to Param 👋</h1>

<br/>

## Technologies ⚡

<br/>

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)

<br/>

<h2>This work is a micro clone fintech app made using <a href="https://fakestoreapi.com">FakeStoreApi</a>.</h2>

<br/>

You can download the app: [iOS](https://i.diawi.com/hFhgdC)

<br/>

## Authentication

You can log in with any <kbd>email</kbd> and <kbd>password</kbd>that complies with the validation rules.

<br/>

<h4>In the project, I used the endpoints provided by fakestoreapi in order to simulate login process.</h4>

<br/>

<h2 style="color:rgb(255,119,5);font-weight:bold;text-align:center" >Getting Started</h2>
<br/>

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

<br/>

> ## Step 1: Install dependencies

> cd into the directory, install dependencies.

```sh
$ cd Param
$ yarn
```

<br/>

> ## Step 2: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
yarn start
```

<br/>

> ## Step 3: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
yarn android
```

### For iOS

```bash
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

<br/>

## Congratulations! 🎉

You've successfully run Param 🥳

<br/>

## Deep Linking

Deep linking allows users to navigate to specific screens or perform actions within app by clicking on or typing in specific URLs. In Param, I have implemented deep links to provide a seamless and convenient way for users to access product details and their shopping cart directly.

### Supported Deep Links:

The following deep links are supported in Param. Similarly, you can open the deep links on Android using the --android flag:

<kbd>param://home</kbd> Navigates to the home screen. For example:

```bash
npx uri-scheme open "param://home" --ios

```

<kbd>param://profile</kbd> Navigates to the user's profile screen. For example:

```bash
npx uri-scheme open "param://profile" --ios

```

<br/>

## Boot Splash Screen

Param features a boot splash screen that appears when the application is launched, providing a visually appealing and branded experience to users during the initial loading phase. The boot splash screen is a static image that serves as a placeholder while the app initializes and prepares its core components for use.

The boot splash screen in Param is designed to capture users' attention and maintain a consistent brand image. It helps create a smooth transition from the launch process to the main application interface, improving the overall user experience.

 <br/>

## Author

👤 **İsmail Harmanda**

- Github: [İsmail Harmanda](https://github.com/ismailharmanda)
- Medium: [İsmail Harmanda](https://medium.com/@ismailharmanda)
- Twitter: [İsmail Harmanda](https://twitter.com/ismail_harmanda)

<br/>

# Troubleshooting

If you get an error message like <kbd>error Your Ruby version is 2.6.8, but your Gemfile specified 2.7.5</kbd> or something like that you may need to upgrade your shell ruby version.

- You may use http://rbenv.org/ or https://rvm.io/ to install and use required version.

if you have problems with installing pods, you can go to ios folder and type:

```bash
pod install --repo-update
```

and start the project again.

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.
