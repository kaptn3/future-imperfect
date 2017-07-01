---
layout: post
title:  "Установки на Linux для Web-разработки. Заметки"
date:   2017-06-27 16:00
category: life
icon: linux
keywords: linux, web-разработка, web, программы
image: 9.jpg
preview: 0
---
## Небольшое примечание
Перед каждой установкой программы желательно обновлять пакеты:  
`sudo apt-get update`
## Редакторы
- Установим два редактора:  
Visual Studio Code:  
```
sudo apt-get install ubuntu-make 
umake ide visual-studio-code
```  
... и Sublime Text:    
```
sudo add-apt-repository ppa:webupd8team/sublime-text-3  
sudo apt-get install sublime-text-installer
```

## Git
- Устанавливаем git, если не установлен и генирируем ssh-ключ для работы с репозиторием:  
```
ssh-keygen -t rsa -b 4096  
cat ~/.ssh/id_rsa.pub
```
Ключ копируем и вставляем [сюда](https://github.com/settings/keys).  
И запускаем ssh-agent:  
`eval "$(ssh-agent -s)"`  
Теперь можно работать с репозиториями.

## Сервер
Для сервера будем использовать стек LEMP (Linux, Nginx, MySQL и PHP).
- Установим Nginx:  
`sudo apt-get install nginx`  
Запускается он автоматически, поэтому зайдя на [localhost](//localhost) вы увидете страницу от Nginx.  
По умолчанию сайты находятся в папке /usr/share/nginx/html. Если нужно поменять путь, то в файле конфигурации, /etc/nginx/sites-available/default.conf, нужно найти и изменить строчку: `root /usr/share/nginx/html;` на нужный нам путь.
- Установим MySQL:  
`sudo apt-get install mysql-server`
- Установим PHP:  
`sudo apt-get install php php-cli php-fpm php-mysql`  
Теперь нам необходимо изменить одну из настроек в файле конфигурации PHP, для чего откроем файл "php.ini"
Находим параметр "cgi.fix_pathinfo", убираем символ комментария в начале строки (";") и установливаем значение параметра 0, чтобы в результате получилось:  
`cgi.fix_pathinfo=0`  
Перезапускаем процесс PHP:  
`sudo systemctl restart php7.0-fpm`  
- Настроим Nginx для работы с PHP:  
Добавим в директиву "index" значение "index.php" первым в списке (чтобы PHP файлы имели приоритет в обработке веб-сервером перед HTML):  
```
root /var/www/html;
index index.php index.html index.htm index.nginx-debian.html;
```
Установим директиву "server_name" в значение IP адреса или доменного имени нашего сервера:  
`server_name server_domain_or_IP;`
Раскомментировать секцию, которая описывает настройки обработки PHP и блок location для файлов .htaccess. Сервер Nginx не обрабатывает эти файлы; если один из этих файлов попадёт в document root, его нельзя отображать клиентам. Вот, что должно получиться в итоге:  
```
location ~ \.php$ {
    include snippets/fastcgi-php.conf;
    fastcgi_pass unix:/run/php/php7.0-fpm.sock;
}
location ~ /\.ht {
    deny all;
}
```
После проверим файл на наличии ошибок:  
`nginx -t`  
и перезагрузим nginx:  
`nginx -s reload`
- Тестирование  
В папке для сайтов создаём php-файл со строкой:  
`<?php phpinfo();`  
и открываем его в браузере. Если появляется страница, содержащую информацию о сервере, значит nginx обслуживает файлы PHP. Теперь можно удалить этот файл и продолжить работать.
- WordPress  
Для работы с WordPress нужно настроить MySQL. 
Зайдём через root-пользователя:  
`mysql -uroot -p`  
Создадим базу данных:  
`CREATE DATABASE wordpress;`  
Создадим нового пользователя:  
`CREATE USER 'user'@'localhost' IDENTIFIED BY 'testpass';`  
Предоставим пользователю полный доступ к базе данных:  
`GRANT ALL PRIVILEGES ON blog . * TO 'user'@'localhost';`  
Сбрасываем привилегии:  
`FLUSH PRIVILEGES;`  
Далее скачиваем WordPress и помещаем его в папке сайта. В файле wp-config.php изменяем параметры MySQL на только что настроенные:  
```
define('DB_NAME', 'wordpress');
define('DB_USER', 'user');
define('DB_PASSWORD', 'testpass');
define('DB_HOST', 'localhost');
```
Открываем в браузере wp-activate.php и следуем по инструкции.

## Sass
- Установим Ruby, а далее и Sass:  
```
sudo apt-get install ruby
sudo gem install sass
```

## Gulp 
- Для начала нужно устрановить node.js:  
`sudo apt-get install nodejs`  
На всякий случай, можно проверить версию:  
`nodejs -v`  
- Далее установим сборщик пакетов, npm:  
`sudo apt-get install npm`  
Проверить версию можно также, как и у node.js.
- Далее установим Gulp.  
`npm install --global gulp`  
В данном случае мы установили Gulp глобально, то есть его можно использовать в любом месте системы. Чтобы установить его только в папке разработки можно использовать команду:  
`npm install --save-dev gulp`  
- Создаём проект:  
`nmp init`  
Настройки проекта будут находиться в файле package.json  
- Проверяем работу. В файле gulpfile.js пишем следующий код:  
```
gulp.task('hello', function() {
    console.log('Hello, World!');
});
```
И в терминале запускаем его:  
`gulp hello`  
В результате должны увидеть фразу "Hello, World!".

## Jekyll
- Устанавливаем павкет ruby и ruby-dev для разработки:  
`sudo apt-get install ruby ruby-dev`  
- Далее устанавливаем Jekyll и Bundler:  
`sudo gem install jekyll bundler`  
- Переходим в папку с готовым Jekyll-сайтом и запускаем сервер:  
`bundle exec jekyll serve`  
- И переходим на [localhost:4000](//localhost:4000).  
- Если нужно начать новый проект, то используем команду:  
`jekyll new название_проекта`   
- И также переходим в папку "название_проекта" и запускаем сервер.

## React JS
Для работы с реактом, должны быть [установлены](#gulp) NodeJS и npm
- Установим create-react-app:  
`sudo npm install -g create-react-app`  
- Инициализируем проект:  
`create-react-app my-app`  
- Переходим в папку my-app и запускаем проект в режиме разработки:  
`npm start`  
Суть в том, что страница [localhost:3000](//localhost:3000) будет перезагружаться как только будут произведены какие-либо изменения в файлах.
