# Next Sing

This is the code for the website of MIT's newest large music group.

## Setup

To run the site succesfully, you'll need:

- Ruby 2.4 or newer with Bundler (install via `gem install bundler`)
- Node.js 12.15 or newer

To install the dependencies, run:

- `bundle install` (for Ruby dependencies, including Jekyll)
- `npm install` (for Node dependencies, including Webpack)

## Development

To run the website during development, use the following command:

```bash
./node_modules/.bin/webpack --watch | bundle exec jekyll serve --livereload --incremental
```
