########################
QUICK MANUAL
########################

CREATE CONTENTS AND CONNECT THE APP WITH YOUR WORDPRESS

1. Install the plugin "wapp" on your wordpress. We recommend that you install from the tool itself Wordpress (ZIP file wapp.zip)
2. Create contents with the plugin http://themebreakers.com/support/article-categories/wapp-wordpress-plugin/. It is very important that every content including images (the json only send images attached to the post).
3. Go to folder "Cordova APP", open it, now open the folder "Code-Cordova-APP" and within it opens the "www" folder. There you will find the "js" folder, open it and find the file "config.js". Open it with a code editor and replaces the URL "http://wapp.club/" for yours. Includes slash in the domain. Do not use “/api” in your domain, only the full domain, with http:// and the final slash /)
4. Get the PUSHWOOSH_ID and GCM_PROJECT_NUMBER from PUSHWOOSH (http://themebreakers.com/support/knowledge-base/about-creating-a-free-account-at-puswoosh-and-its-connection-to-the-android-app/ and http://themebreakers.com/support/knowledge-base/about-creating-a-free-account-at-puswoosh-and-its-connection-to-the-ios-app/
5. That's all you can and build your APP or compress everything in zip and send it to Adobe Build.


########################
DETAILS
########################

# WAPP - Cordova Wordpress App
# README file

Thank you for purchasing this item. Please, read these instructions to build and run the app.


## Set up your environment

To build this app you need to install Cordova in your system. You can get it by visiting its
website: http://cordova.apache.org/

(If you have already installed Cordova, skip this step.)

In order to deploy the app to any specific platform (iOS, Android), you will need the specific
SDKs installed in your computer. 


## Build the app

Once you have installed and set up Cordova in your computer, open a terminal and go to the Wapp project
folder. Then, invoke the following commands for adding those platforms you want to deploy the app:

	cordova platform add android
	cordova platform add ios
	

## Customize

Customization of the Wapp app is quite easy. Depending on what you want to do, read the following
indications.

### Your site's URL

This app is designed for bringing to the user a unique experience when reading a WordPress site of your
own. In order to get the things working, you must set the URL of the site you want to point at the main
config file.

Open the config.js file at the www/js folder and change the API_BASE_URL variable to the proper value.

	var API_BASE_URL = "http://your.wordpress.site/";

Then, save the file and build the app again.

Make sure you have the Wapp plugin installed at your WordPress site.

### Push messages

The Wapp app can receive Push notifications through a third party service provider called PushWoosh. To enable
this feature you must, first at all, create an account at PushWoosh and register the app at Google Cloud Messaging
and/or Apple Push Notifications service.

When you have done, take the PushWoosh application id and set the variable PUSHWOOSH_ID at the config.js file.

	var PUSHWOOSH_ID = "XXXXX-YYYYY";

Save the file and build the app again. In the next run, the app will ask you if you want to receive push notifications.


### Splash screen

You must provide some PNG images for the splash screen. The amount of files and their sizes depend on the target platform.

Every time you made changes in those images, you should run the 'cordova prepare' command to update the files at each
platform build. Then rebuild app with the 'cordova build' command.

#### Android

The following files are required:

* screen-ldpi.png, for low dpi screens (~120dpi)
* screen-mdpi.png, for medium dpi screens (~160dpi)
* screen-hdpi.png, for high dpi screens (~240dpi)
* screen-xhdpi.png, for extra high dpi screens (~320dpi)
* screen-xxhdpi.png, for extra extra high dpi screens (~480dpi)

Put them on the res/screen/android folder into the Wapp project folder.

#### iOS

The following files are required:

* screen~iphone.png, for the iPhone (320x480)
* screen@2x~iphone.png, for the iPhone retina display (640x960)
* screen-568h.png, for the iPhone 5 (320x568)
* screen-568h@2x.png, for the iPhone 5 retina display (640x1136)
* screen-667h.png, for the iPhone 6 retina display (750x1334)
* screen-736h.png, for the iPhone 6 3x display (1242x2208) 

Put them on the res/screen/ios folder into the Wapp project folder.


### App icon

#### iOS

This document explains how to customize the app icon for an iOS build of the Wapp app. It can be easily done by following these steps:

First, open the project folder and go to the res folder. You can see some subfolders and, among them, one called ios.

Prepare several versions of the app icon image in PNG format. The required image sizes and filenames are detailed below:

* icon-40.png (40×40)
* icon-40@2x.png (80×80)
* icon-50.png (50×50)
* icon-50@2x.png (100×100)
* icon-60.png (60×60)
* icon-60@2x.png (120×120)
* icon-60@3x.png (180×180)
* icon-72.png (72×72)
* icon-72@2x.png (144×144)
* icon-76.png (76×76)
* icon-76@2x.png (152×152)
* icon-small.png (29×29)
* icon-small@2x.png (58×58)
* icon.png (57×57)
* icon@2x.png (114×114)

Copy those PNG files into the ios folder.

Finally, rebuild the project and you will see the new app icon when deploy.

#### Android

This document explains how to customize the app icon for an android build of the Wapp app. It can be easily done by following these steps:

First, open the project folder and go to the res folder. You can see some subfolders and, among them, one called android. Inside that folder you can see some folders, called mipmap-*.

Prepare several versions of the app icon image in PNG format. Their sizes depend on the target screen pixel density. The required image sizes are the following:

 * 48×48 for ldpi
 * 48×48 for mdpi
 * 72×72 for hdpi
 * 96×96 for xhdpi
 * 144×144 for xxhdpi
 
Then, copy each PNG file into the corresponding mipmap-* folder. The file name must be ic_launcher.png.

Finally, rebuild the project and you will see the new app icon when deploy.

## Further info

Please, visit http://themebreakers.com/support/article-categories/wapp-multiplatform-app/ for additional info about the WAPP app
and the WP plugin. You can find there a lot of useful articles.


########################
VERY COMMON ERRORS
########################

THE SOFTWARE ENVIRONMENT
http://themebreakers.com/support/knowledge-base/the-software-environment-you-need/

You must have updated the software environment on your computer. Make sure you have installed the following software versions:

CORDOVA
Phonegap versión: 5.0

PLUGIN CORDOVA (native method by comand line)
com.pushwoosh.plugins.pushwoosh 3.5.1 "Pushwoosh"
cordova-plugin-file 2.0.0 "File"
cordova-plugin-file-transfer 1.0.0 "File Transfer"
cordova-plugin-whitelist 1.0.0 "Whitelist"
de.appplant.cordova.plugin.email-composer 0.8.2 "EmailComposer"
nl.x-services.plugins.socialsharing 4.3.18 "SocialSharing"
org.apache.cordova.device 0.2.9 "Device"
org.apache.cordova.device-motion 0.2.11 "Device Motion"
org.apache.cordova.device-orientation 0.3.11 "Device Orientation"
org.apache.cordova.dialogs 0.2.10 "Notification"
org.apache.cordova.geolocation 0.3.12 "Geolocation"
org.apache.cordova.inappbrowser 0.6.0 "InAppBrowser"
org.apache.cordova.splashscreen 1.0.0 "Splashscreen"
org.apache.cordova.statusbar 0.1.9 "StatusBar"
org.apache.cordova.vibration 0.3.13 "Vibration"


GENERATE CONTENTS IN YOUR WORDPRESS
http://themebreakers.com/support/article-categories/wapp-wordpress-plugin/

IT’S VERY VERY IMPORTANT that the contents of the APP include original images. Images must be loaded in each of the APP content. These images must be associated to each of the contents of the custom post type “Wapp Content”. Therefore, and as a summary, each generated “Wapp content” post should include original images must be loaded specifically for them.