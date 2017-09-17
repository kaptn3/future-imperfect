# Future Imperfect Theme on Jekyll
>by [Kapitonenko](https://kaptn.ru)

<https://blog.kaptn.ru> - demo  
<https://github.com/ViKapitoshka/blog/> - repository

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.png?v=103)](https://github.com/ellerbrock/open-source-badge/)
![Future Imperfect Theme preview](https://cdn.rawgit.com/ViKapitoshka/blog/4ccc6d6a/readme_files/screen.png)

1. [Installation](#installation)
2. [Usage](#usage)
3. [Features](#features)
    - [Categories](#categories)
    - [Comments](#comments)
    - [Icons](#icons)
    - [Post Image](#post-image)
    - [Preview](#preview)
    - [Edit](#edit)
    - [Web analytics](#web-analytics)
4. [Upgrading Theme](#upgrading-theme)
5. [Thanks to the following](#thanks-to-the-following)
6. [Donate](#donate)
7. [Copyright and license](#copyright-and-license)

## Installation 
1. Download, clone or fork repo `git clone git@github.com:ViKapitoshka/blog.git`
2. Enter the folder: `cd blog/` 
3. Start Jekyll server: `jekyll s`

Access, [localhost:4000](http://localhost:4000)

## Usage

If you're completely new to Jekyll, I recommend checking out the documentation at <http://jekyllrb.com> or there's a tutorial by Smashing Magazine.

## Features
### Categories
In blog page, we categorize posts into several categories by url, all category pages use same template html file - `_includes/category.html`. Links of category in menu is in `_data.links.yml`.

For example: URL is `localhost:4000/codeacademy`. In `_data.links.yml` we define this category named Codecademy, so in `_includes/category.html` we get this URL(/codecademy/) and change it to my category(Сodecademy), then this page are posts about Python.

### Comments
I use [HyperComments](http://hypercomments.com) instead of other tool, Disqus, so it's slower and don't allows to anonymously send messages. Code of comment is in `_includes/comments` and included in every post.

### Icons
For categories I use svg-icons in `images`. Еhe icon is automatically assigned to the post by its category. The icon name must be `category.svg`.

### Post Image
All images used in posts that are in `post-image` and its are categorized. For example, images in post of jQuery's category is in `post-img/jquery`. 

### Preview
You can specify the preview image for post in [YAML Front Matter](http://jekyllrb.com/docs/frontmatter/). In front matter called "image" to indicate the name of the image. The picture must be located in a category folder.    
For example, we write post of codecademy's category. In folder `post-img/category` put the preview image with the title "9.png" and in front matter write: `image: 9.png`. [Example](https://github.com/ViKapitoshka/blog/blob/master/_posts/2017-06-08-learn-git4.md).

Also, in front matter you can control the announcement of record post. By default, the announcement consists of 35 words. Writing in the front matter called "preview" the number 0, the announcement will not be displayed for this entry. [Example](https://github.com/ViKapitoshka/blog/blob/master/_posts/2017-06-08-learn-git4.md).

### Edit
All posts can be edited by users through link: `github.com/ViKapitoshka/blog/edit/master/{{ page.path }}` or `github.com/ViKapitoshka/blog/edit/master/{{ post.path }}`.

### Web analytics
I use [Yandex Metrika](https://metrika.yandex.ru) to do web analytics, you can choose either to realize it, just paste your code in `includes/yandex-metrika.html`.

## Upgrading Theme
Blog is always being improved by its users, so sometimes one may need to upgrade.

Ensure there's an upstream remote

If `git remote -v` doesn't have an upstream listed, you can do the following to add it:

`git remote add upstream https://github.com/vikapitoshka/blog.git`
Pull in the latest changes

`git pull upstream gh-pages`
There may be merge conflicts, so be sure to fix the files that git lists if they occur. That's it!

## Thanks to the following
[Jekyll](http://jekyllrb.com/)  
[HTML5Up](https://html5up.net/)  
[Font Awesome](http://fontawesome.io/icons/)  
[HyperComments](http://hypercomments.com)

## Donate
In `includes/donate.html` you'll see form for donation, includes in every post.  
Also if this project let you enjoy your blog time, you can give me a cup of coffee :)

[Donate =)](https://money.yandex.ru/to/410013162271067/10)

## Copyright and license
The theme is taken Future Imperfect Theme from [HTML5 UP](https://html5up.net).

It is under [the MIT license](/LICENSE).

Enjoy :yum:
