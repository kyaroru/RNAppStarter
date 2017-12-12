# RNAppStarter
This is a starter app for React Native with some boilerplate code :p
- Redux integration
- Redux Saga Integration
- Folder structure

  |--src
  |----actions
  |----api
  |----reducers
  |----sagas
  |----store
  |----app.js
  |----main.js
  |-index.js
  |-app.json
  |-package.json

- Packages included:
```
  "axios": "^0.17.1",
  "qs": "^6.5.1",
  "react": "16.0.0",
  "react-native": "0.51.0",
  "react-native-config": "^0.6.0",
  "react-native-vector-icons": "^4.4.2",
  "react-navigation": "^1.0.0-beta.21",
  "react-redux": "^5.0.6",
  "redux": "^3.7.2",
  "redux-logger": "^3.0.6",
  "redux-persist": "^4.10.1",
  "redux-saga": "^0.16.0"
```

## Clone
```
git clone https://github.com/kyaroru/RNAppStarter
cd RNAppStarter
npm install
react-native link (important! to link the packages)
```

## Start
```
react-native run-android
react-native run-ios
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
- Copy the following to android/build.gradle (without /app)
- This is to solve sdk version mismatch issue
```
subprojects {
    afterEvaluate {project ->
        if (project.hasProperty("android")) {
            android {
                compileSdkVersion 23
                buildToolsVersion '23.0.1'
            }
        }
    }
}
```

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