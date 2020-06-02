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

Download a live Demo published on both [App Store][link:app-store] and [Google Play][link:google-play]
 or simply run it yourself by cloning a GitHub repo. 

![Kitten Material](https://camo.githubusercontent.com/f0487d92194f3c685213539c53e9784113cd8a4b/68747470733a2f2f692e696d6775722e636f6d2f58384f344748622e706e67)

![Preview](https://i.imgur.com/2E2nWHc.jpg)

[<img src="http://i.imgur.com/7IxtMV0.png" width="200"/>][link:app-store]
[<img src="http://i.imgur.com/pxFfB0S.png" width="200"/>][link:google-play]

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
