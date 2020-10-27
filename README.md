## Instruction
1/ Install XAMP (we use 7.3.18 for both XAMPP and PHP)
2/ Clone the repo
3/ Start XAMPP, start Apache and MySQL server
4/ Import the tal971714_db.sql db to your db (XAMPP control panel -> MySQL -> Admin)
5/ Change the information in config.php accordingly to your setup (database,username,password,url)
6/ Navigate to "url" (usually localhost pr localhost/public)

## About Flarum

**[Flarum](https://flarum.org/) is a delightfully simple discussion platform for your website.** It's fast and easy to use, with all the features you need to run a successful community. It is designed to be:

* **Fast and simple.** No clutter, no bloat, no complex dependencies. Flarum is built with PHP so it’s quick and easy to deploy. The interface is powered by Mithril, a performant JavaScript framework with a tiny footprint.

* **Beautiful and responsive.** This is forum software for humans. Flarum is carefully designed to be consistent and intuitive across platforms, out-of-the-box.

* **Powerful and extensible.** Customize, extend, and integrate Flarum to suit your community. Flarum’s architecture is amazingly flexible, with a powerful Extension API.

![screenshot](https://flarum.org/img/screenshot.png)

## Installation

You must have SSH access to a server with **PHP 7.1+** and **MySQL 5.6+**, and install [Composer](https://getcomposer.org/).

```
composer create-project flarum/flarum . --stability=beta
```

Read the **[Installation guide](https://flarum.org/docs/install.html)** for more information. For support, refer to the [documentation](https://flarum.org/docs/), and ask questions on the [community forum](https://discuss.flarum.org/) or [Discord chat](https://flarum.org/discord/).

## Contributing

Thank you for considering contributing to Flarum! Please read the **[Contributing guide](https://flarum.org/docs/contributing.html)** to learn how you can help.

This repository only holds the Flarum skeleton application. Most development happens in [flarum/core](https://github.com/flarum/core).

## Security Vulnerabilities

If you discover a security vulnerability within Flarum, please send an e-mail to [security@flarum.org](mailto:security@flarum.org). All security vulnerabilities will be promptly addressed.

## License

Flarum is open-source software licensed under the [MIT License](https://github.com/flarum/flarum/blob/master/LICENSE).

