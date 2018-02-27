---
layout: post
title:  "Readme"
date:   2018-02-20 21:00
category: category2
icon: git
keywords: tag1, tag2
image: 1.jpg
preview: 0
---

<https://blog.kaptn.ru> - demo  
<https://github.com/vikapitoshka/blog/> - repository

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.png?v=103)](https://github.com/ellerbrock/open-source-badge/)
![Future Imperfect Theme preview](https://cdn.rawgit.com/ViKapitoshka/blog/4ccc6d6a/readme_files/screen.png)

1. [Installation](#installation)
2. [Usage](#usage)
3. [Content management](#content-management)
    - [Template](#template)
    - [Example of post](#example-of-post)
    - [Category page](#category-page)
4. [Features](#features)
    - [Categories](#categories)
    - [Comments](#comments)
    - [Icons](#icons)
    - [Post Image](#post-image)
    - [Featured image](#featured-image)
    - [Edit link](#edit-link)
    - [Web analytics](#web-analytics)
5. [Upgrading Theme](#upgrading-theme)
6. [Thanks to the following](#thanks-to-the-following)
7. [Todo](#todo)
8. [Donate](#donate)
9. [Copyright and license](#copyright-and-license)

## Installation 
1. Download, clone or fork repo `git clone git@github.com:vikapitoshka/blog.git`
2. Enter the folder: `cd blog/` 
3. Start Jekyll server: `jekyll s`

Access, [localhost:4000](http://localhost:4000)

## Usage
If you're completely new to Jekyll, I recommend checking out the documentation at <http://jekyllrb.com> or there's a tutorial by Smashing Magazine.

If you have any questions please ask me at [GitHub Issues](https://github.com/vikapitoshka/blog/issues).

## Content management
### Template
Template of posts setting is in `_drafts/template.md`. `Layout` is always named `post`. `Title` is a title of post, writing in quotation marks. `Date` written in the following format: `yyyy-mm-dd hh:mm`. In `category` specifies one category. In `icon` written the name of icon (its in the folder `images`). In `tags` is possible to write multiple tags using a comma. In `image` specify the path to image preview (can not fill). And in `preview` you can write `0` to on the main page didn't show the announcement of the post. 

More details about all features and setting can be view on [here](#features).

### Example of post
```
layout: post
title:  "Lorem"
date:   2017-06-04 00:00
category: category_name
icon: git
keywords: tag1, tag2
image: 1.png
preview: 0
```

### Category page
If you want to add a page of category you have to create folder with name of category and file `index.html`, which should contain the following:  
```
---
layout: default
title: Category1
permalink: /category1/ 
---

{% include category.html %}
```

You can see example in [here](https://github.com/vikapitoshka/blog/blob/master/category1) or [here](https://github.com/vikapitoshka/blog/blob/master/category2).

## Features
### Categories
In blog page, we categorize posts into several categories by url, all category pages use same template html file - `_includes/category.html`. Links of category in menu is in `_data.links.yml`.

For example: URL is `localhost:4000/category1`. In `_data.links.yml` we define this category named category1, so in `_includes/category.html` we get this URL(/category1/) and change it to my category(category1), then this page are posts about category1.

### Comments
I use [HyperComments](http://hypercomments.com) instead of other tool, Disqus, so it's slower and don't allows to anonymously send messages. Code of comment is in `_includes/comments` and it included in every post.

### Icons
For categories I use svg-icons in `images`. Еhe icon is automatically assigned to the post by its category. The icon name must be `category_name.svg`.

### Post Image
All images used in posts that are in `post-image` and its are categorized. For example, images in post of category1's category is in `post-img/category1`. 

### Featured image
You can specify the preview image for post in [YAML Front Matter](http://jekyllrb.com/docs/frontmatter/). In front matter called "image" to indicate the name of the image. The picture must be located in a category folder.    
For example, we write post of category_name's category. In folder `post-img/category_name` put the preview image with the title "1.png" and in front matter write: `image: 1.png`. [Example](https://github.com/ViKapitoshka/blog/blob/master/_posts/2017-06-08-learn-git4.md).

Also, in front matter you can control the announcement of record post. By default, the announcement consists of 35 words. Writing in the front matter called "preview" the number 0, the announcement will not be displayed for this entry. [Example](https://github.com/ViKapitoshka/blog/blob/master/_posts/2017-06-08-learn-git4.md).

### Edit link
All posts can be edited by users through link: `github.com/vikapitoshka/blog/edit/master/{{ page.path }}` or `github.com/vikapitoshka/blog/edit/master/{{ post.path }}`. 

### Web analytics
I use [Yandex Metrika](https://metrika.yandex.ru) to do web analytics, you can choose either to realize it, just paste your code in `includes/analytics.html`.

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

## TODO
- [ ] Add 404 page
- [ ] Search system
- [x] Add fontawesome 5
- [ ] Add paginator

## Donate
In `includes/donate.html` you'll see form for donation, includes in every post.  
Also if this project let you enjoy your blog time, you can give me a cup of coffee :)

[Donate =)](https://money.yandex.ru/to/410013162271067/10)

## Copyright and license
The theme is taken Future Imperfect Theme from [HTML5 UP](https://html5up.net).

It is under [the MIT license](/LICENSE).

Enjoy :yum:
