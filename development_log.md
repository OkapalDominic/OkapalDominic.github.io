#

<h1 align="center">Portfolio Journal</h1>

<p align="center">By Dominic Okapal</p>

I decided to create my portfolio site using React.

I first found a basic tutorial that went through building a tic-tac-toe game in react.  This was helpful to start understanding how to use it, and I was able to put it on GitHub pages, but I soon moved on to finding a tutorial that would help me build a site.

The first one I found was fairly old, and would have required too many changes to work with the current version.  So I eventually found [this][tutorial1] tutorial, which allowed me to build a working framework for my portfolio site.

My first problem with the tutorial was with the global style.  The tutorial said to create it by making an injectGlobal template, and that would work.  Unfotunately I found out that [injectGlobal was removed][injectGlobal] and replaced with [createGlobalStyle][createGlobalStyle] in styled-components v4.  So I had to make that one small change to get the global style working.

I could now run my site locally, and while I needed to change content still, at least it was running.  So I decided to try and put it on GitHub pages, that's when the real problems began.

At first it didn't seem to load anything, but I noticed that the path to the main .js file was wrong.  I had been building in a repository called portfolio, and discovered that I needed to modify build in package.json so that it knew what my actual path was.  So I was able to load the portfolio page...

https://okapaldominic.github.io/portfolio/ would show my portfolio page, not my homepage, and if I clicked on home it would go to https://okapaldominic.github.io and load a 404 error page.  Also the other pages would show 404 error as well.  I tried a lot of different potential solutions, but finally found that I could make my own 404.html file, allowing me to redirect back to my index.html and so perform proper routing.  Once that worked, I decided to move everything over to [okapaldominic.github.io][myRepo] to make life easier and not have to put everything under /portfolio/.

This taught me an interesting thing, GitHub pages normally allows you to choose what branch it should look at in the repo, but if your repo is (name).github.io, then it will look in the master branch and only in the master branch.  To solve this new problem I created a development branch to work in, and deployed to the master branch.  Now that everything is working as desired I can finally focus on just designing my pages, and adding content.

[tutorial1]: https://blog.alexdevero.com/build-website-react-pt1/
[injectGlobal]: https://www.styled-components.com/docs/api#deprecated-injectglobal
[createGlobalStyle]: https://www.styled-components.com/docs/api#createglobalstyle
[myRepo]: https://github.com/OkapalDominic/okapaldominic.github.io