# mission-management

## Installation(windows)
-[Docker](https://www.docker.com/products/docker-desktop)(```Optional, if your installed MongoDB environment in your computer, you don't need to install Docker```)

-[Composer](https://getcomposer.org/)

-[NodeJS](https://nodejs.org/en/)

## Usage
Script- folder: ```mission-mng```:

```php
composer install(or 'composer update')

# copy .env.example to .env
cp .env.local .env

# APP_KEY generate
php artisan key:generate
php artisan config:cache

# start back-end server
php artisan serve
```

Script in root folder(```Optional, if your installed MongoDB environment in your computer, you don't need to run it```):

```docker
docker-compose up -d
```

***

## Support
-Email: nguyenphiikhanh@gmail.com

-Phone: +84 337 448 980

-LinkedIn Contact: [https://www.linkedin.com/in/nguyenphiikhanh](https://www.linkedin.com/in/nguyenphiikhanh) 

## Roadmap
This project is updating...

## Authors
Nguyen Phi Khanh(dev-khanhnp)

## License
!!This project made by Nguyen Phi Khanh for HNUE so it is not open source.
