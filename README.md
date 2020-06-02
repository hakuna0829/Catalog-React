# Catalogs App 
Based on this excellent template, we are building an application to replace our current app on the app store. 

There are two graphql APIs that will feed this app. An initial call will return a user payload that will contain clients etc.

A second graphql API will be used with apollo hooks to populate catalogs and products in the app. 

Entities:
User: An agent/member of a client organization
Org: A paying client of catalogs.com. We create multiple catalogs for this org, and the client is then 
Customer: A customer of the Org. A chat system connects the agent to the customer via third party like twilio


Catalog: A Catalog Containing Pages and Products
Product: A Product that belongs to a particular catalog
WishList/Cart/Selection: A list of products that can be created dynamically by Agent and Sent to Customer

This perfect starter kit is an app based on React Native and [**UI Kitten library**][link:ui-kitten] with Light and Dark themes support. It’s completely free and Open Source. 
Compose the application from available screens, add backend integration and you will end up with A-grade cross-platform mobile application.
The themes can be changed in the runtime, without any need of reloading the application.

Download a live Demo published on both [App Store][link:app-store] and [Google Play][link:google-play]
 or simply run it yourself by cloning a GitHub repo. 

![Kitten Material](https://camo.githubusercontent.com/f0487d92194f3c685213539c53e9784113cd8a4b/68747470733a2f2f692e696d6775722e636f6d2f58384f344748622e706e67)

## Key features:
 
- Built with **TypeScript**.
- **Dark and Light themes** could be used simultaneously and changed on the fly. 
- **40 ready-to-use stunning screens** – for any domain: e-commerce, social, fitness, etc. 
- **Huge variety of customizable layouts**, use “as is” or add new blocks from the UI Kit.
- **Integration with Eva Design System** allows you to create mobile application staying in brand style and get clean, consistency design

## Documentation:

This template is using [UI Kitten components][link:ui-kitten], [here you can find documentation and other useful articles][link:doc-ui-kitten].

## Mobile backend Bundles

Easy way to integrate UI Kitten with backend ([Java][link:ui-kitten-bundle-java], [.NET Core][link:ui-kitten-bundle-dotnet-core]).

[<img src="https://i.imgur.com/HVNZQGR.jpg">][link:ui-kitten-bundles]

[badge:github-actions]: https://github.com/akveo/kittenTricks/workflows/Build/badge.svg
[badge:expo]: https://img.shields.io/badge/Runs%20with%20Expo-000.svg?style=flat&logo=EXPO&labelColor=ffffff&logoColor=000
[badge:netlify]: https://api.netlify.com/api/v1/badges/95cdef77-0d68-49a1-a497-b305bb5e3f98/deploy-status

[link:github-actions]: https://github.com/akveo/kittenTricks/actions
[link:expo]: https://expo.io/@ui-kitten/kitten-tricks
[link:netlify]: https://kitten-tricks.netlify.com
[link:eva]: https://hubs.ly/H0n79zV0
[link:doc-ui-kitten]: https://hubs.ly/H0n7b4L0
[link:ui-kitten]: https://github.com/akveo/react-native-ui-kitten
[link:app-store]: https://itunes.apple.com/us/app/kitten-tricks/id1246143230
[link:google-play]: https://play.google.com/store/apps/details?id=com.akveo.kittenTricks
[link:eva-icons]: https://github.com/akveo/eva-icons
[link:akveo-homepage]: https://hubs.ly/H0n7b4P0
[link:akveo-medium]: https://medium.com/akveo-engineering
[link:akveo-twitter]: https://twitter.com/akveo_inc
[link:akveo-facebook]: https://www.facebook.com/akveo
[link:ui-kitten-bundles]: https://hubs.ly/H0n79BR0
[link:ui-kitten-bundle-java]: https://hubs.ly/H0n79C10
[link:ui-kitten-bundle-dotnet-core]: https://hubs.ly/H0n7b5h0
