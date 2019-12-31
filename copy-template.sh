#!/bin/bash
ruby_path=$(find vendor/bundle/ruby -mindepth 1 -maxdepth 1 -print -quit)
echo "Found Ruby vendor folder at $ruby_path. Looking for template..."
template=$(find "$ruby_path/gems" -mindepth 1 -maxdepth 1 -name "minima*" -print -quit)
echo "Found template folder at $template. Now copying..."
cp -r "$template/_includes" .
cp -r "$template/_layouts" .
echo "Done!"
