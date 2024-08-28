# Jaspersoft Visualize Components Samples

## How to set up the GitHub pages locally.

### Reference

[Github pages](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll)

### Prerequisites

<ol>
    <li> Install Ruby.
        <ol>
            <li>
                It is highly recommended you use a Ruby version manager such as <a href="https://github.com/rbenv/rbenv">rbenv</a> or <a href="https://github.com/postmodern/chruby">chruby</a>
            </li> 
            <li> In order to install rbenv on <b>Mac</b>, do the following: </li>
            <li>
                <ul>
                    <li>
                        <code>brew install rbenv ruby-build</code>
                    </li>
                    <li>
                        <code># run this and follow the printed instructions:</code>
                    </li>
                    <li>
                        <code>rbenv init</code>
                    </li>
                </ul>
            </li>
            <li> Install ruby: <br>
                <code>rbenv install 3.1.3</code>
            </li>
            <i>If you want to see the latest version of ruby, you can run the following command:</i>
            <code>rbenv install -l</code>
        </ol>
    </li>
    <li>
        Install <a href="https://jekyllrb.com/docs/installation/macos/">Jekyll</a>
        <ol>
            <li>
                <code>gem install jekyll</code>
            </li>
        </ol>
    </li>
</ol>

### Steps to run the project locally
1. cd to the repo
2. Run ```bundle install```
3. Run ```bundle exec jekyll serve```
4. Access the project at [http://localhost:4000](http://localhost:4000/)


### Steps to deploy to GitHub Pages 

1. Build project using `bundle exec jekyll build`
1. Commit `_site` subtree to `gh-pages` branch: `git subtree split --branch gh-pages --prefix _site/`
1. Wait for GitHub deployment to finish
1. Access site at [GitHub Pages URL](https://jaspersoft.github.io/js-visualize-components-samples/).
