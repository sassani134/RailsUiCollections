```bash
rails new UiCollections -c tailwind
cd UiCollections
bundle add rspec-rails --group "development, test"
rails g rspec:install
npm install --save-dev prettier @4az/prettier-plugin-html-erb @prettier/plugin-ruby
gem install bundler prettier_print syntax_tree syntax_tree-haml syntax_tree-rbs
npm install --save-dev prettier @4az/prettier-plugin-html-erb @prettier/plugin-ruby
mkdir app/views/shared
touch app/views/shared/_navbar.html.erb
rails g stimulus navbar
rails g controller home index
bundle add hotwire-spark --group "development"

```

npx prettier ./src/myfile.html.rb
./node_modules/.bin/prettier --plugin=@prettier/plugin-ruby --write '**/*'