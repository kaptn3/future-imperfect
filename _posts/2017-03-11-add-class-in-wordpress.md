---
layout: post
title:  "Добавление класса к изображениям WordPress"
date:   2017-03-11 18:11:00 +0300
category: [Life]
icon: [wordpress]
link: life
---
В WordPress картинки, которые добавляются редактором в статью, вставляются без классов. Чтобы это исправить мы напишем функцию, которая к каждой картинке добавит класс, например, <code>.img-responsive</code>. В файл <code>function.php</code>, который находится в папке <code>wp-content</code>, нужно прописать следующее:

<xmp style="background: #eee;">images class
function add_image_responsive_class($content) {
   global $post;
   $pattern ="/<img(.*?)class=\"(.*?)\"(.*?)>/i";
   $replacement = '<img$1class="$2 img-responsive"$3>';
   $content = preg_replace($pattern, $replacement, $content);
   return $content;
}
add_filter('the_content', 'add_image_responsive_class');</xmp>