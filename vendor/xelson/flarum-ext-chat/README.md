### Styled
The new minimalistic design will make communication more pleasant.  
![Image](https://sun9-26.userapi.com/gVydTXjGGaTRbMfKP5ylO7qxdziAS2-YZ-3kSg/FvEUVC6gBLM.jpg)

### Media content preview
Send media content to people to make communication brighter!  
![Image](https://sun9-68.userapi.com/W4ovX8pg_Lr8UQrjqdi8wtQpdzdi92JwDqejTg/VFkCrGSkHik.jpg)

### Autoexpanding text area 
Yes. And chat container resizing. You can change the vertical position and height of the chat and these changes are automatically saved to local storage.  
![Image](https://sun9-39.userapi.com/3TVMDAVhXxNvG-DTd2xj8_2PakEnvUsSFqtqSA/crl-KPYKtgE.jpg)

### Deleting and editing
Typo? It's okay. Just edit the message or delete it by starting over.  
![Image](https://sun9-53.userapi.com/c204624/v204624133/53af4/PFqyYR_5iU8.jpg)

### Push and sound notifications  
Stay up to date with the chat discussion and find out about mentions of you via push notifications.  
![Image](https://sun9-8.userapi.com/K5yxp2Vey0-gs7bg4UYF3uAo4gc7PIzP5y6Jaw/VVTi5GMKLoY.jpg)

# Neon Chat

![License](https://img.shields.io/badge/license-MIT-blue.svg) 
[![Latest Release](https://img.shields.io/packagist/v/xelson/flarum-ext-chat)](https://packagist.org/packages/xelson/flarum-ext-chat)   
A [Flarum](http://flarum.org) extension. Adds native realtime chat to your Flarum.

# Installation

Install extension via composer:
```
composer require xelson/flarum-ext-chat
```
For development builds:
```
composer require xelson/flarum-ext-chat:dev-master
```
Make sure that Pusher extension is enabled

# Updating
Via composer:
```
composer update xelson/flarum-ext-chat
```
Reenable extenstion in admin panel to execute database migration

For development builds:
```
composer require xelson/flarum-ext-chat:dev-master
php flarum migrate
php flarum cache:clear
```

# To Do List:

* Emoji picker
* [FriendsOfFlarum/upload](https://github.com/FriendsOfFlarum/upload) support
* Forum notifications for missed mentions
* Global user muting
* Customizing of notification sounds
* Alternative working mode without Pusher
* Private chat rooms
* Chat messages history. Finding messages by keywords or name
