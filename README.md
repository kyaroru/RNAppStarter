# RNAppStarter
This is a starter app for React Native with some boilerplate code :p
- Redux integration (You can add actions, reducers straigt away!)
- Redux Saga Integration (You can add new saga straight away!)
- Redux Persist (Just add new reducer to the persist folder & it will automatically rehydrate that reducer)
- Redux Logger (See you action and states for every action dispatched!)
- Packages included:
```
    "axios": "^0.17.1",
    "qs": "^6.5.2",
    "react": "16.4.1",
    "react-native": "0.56.0",
    "react-native-config": "^0.6.0",
    "react-native-vector-icons": "^4.6.0",
    "react-navigation": "^2.6.2",
    "react-redux": "^5.0.6",
    "redux": "^3.7.2",
    "redux-form": "^7.4.2",
    "redux-logger": "^3.0.6",
    "redux-persist": "^5.10.0",
    "redux-saga": "^0.16.0"
```

## Yo
![Demo](http://g.recordit.co/2P4aeACaFQ.gif)

## Clone
```
git clone https://github.com/kyaroru/RNAppStarter
cd RNAppStarter
npm install
```

## Start
```
npm start
ios > open RNAppStarter.xcodeproj
android > open Android Studio
run
```

---

## To rename the app to your desired name (Cannot be UNDONE!)
1. Remove the android & ios folder
2. Open app.json and change the following to new app name
```
{
  "name": "RNAppStarter",
  "displayName": "RNAppStarter"
}
```
3. At RNAppStarter folder, run the following command
```
react-native eject
```
4. It will regenerate new android & ios folder with corresponding name + app identifier (eg. com.rnappstarter)
5. Run the following command (important! to link the related packages to native platform)
```
react-native link
```

### For Android (Additional Setup only if rename the app)
- Copy the following to android/app/build.gradle (with /app).
- Put it after `apply plugin: "com.android.application"`
- This is to cater for different environments
```
project.ext.envConfigFiles = [
    debug: "environments/.env.development",
    release: "environments/.env.production",
]

apply from: project(':react-native-config').projectDir.getPath() + "/dotenv.gradle"
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

- Open 'react-native-config/android/build.gradle'
- Change to the following version (because original is too low to support latest RN)
```
    compileSdkVersion 26
    buildToolsVersion '26.0.3'
```

### For iOS (Additional Setup only if rename the app)
- Open [app-name].xcodeproj under ios/ folder
- Click on the Edit Scheme
- Build > Pre-Action > Add New Run Script Action
- Copy the following into the text area
```
echo "./environments/.env.development" > /tmp/envfile
```
- Then press Duplicate Scheme
- Rename the new scheme name to 'App Name (Production)'
- Edit Scheme for the production
- Build > Pre-Action > Add New Run Script Action
```
echo "./environments/.env.production" > /tmp/envfile
```
- Yo, you are good to go !