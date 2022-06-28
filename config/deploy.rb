# config valid for current version and patch releases of Capistrano
lock "~> 3.17.0"

server "91.105.200.101", user: "root", roles: %w{root app db web}
set :keep_releases, 5
set :keep_assets, 1
set :rails_env, "production"
set :application, "shaming"
set :user, "root"
#set :scm, :hg
set :repo_url, "git@github.com:SergRain/shaming.git"
set :branch, "master"

set :deploy_to, "/var/www/dev_mediashaming"
set :passenger_restart_with_touch, true

#set :rvm_custom_path, "/usr/local/rvm"
set :rvm_ruby_version, "ruby-3.0.0@shaming"

set :log_level, :info

set :conditionally_migrate, true

set :linked_dirs, %w{log public/assets public/ckeditor_assets storage public/public public/static public/js}
set :linked_files, %w{.ruby-version public/robots.txt public/sitemap.xml}

#SSHKit.config.command_map[:rake]  = "bundle exec rake"
#SSHKit.config.command_map[:rails] = "bundle exec rails"
SSHKit.config.command_map[:rake] ||= "rake"
SSHKit.config.command_map[:rake].sub!(/\(.*\)rake/, "\1bundle exec rake")

#after 'deploy:updated', 'webpacker:precompile'
#set :application, "my_app_name"
#set :repo_url, "git@example.com:me/my_repo.git"

# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
# set :deploy_to, "/var/www/my_app_name"

# Default value for :format is :airbrussh.
# set :format, :airbrussh

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
# set :format_options, command_output: true, log_file: "log/capistrano.log", color: :auto, truncate: :auto

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
# append :linked_files, "config/database.yml", "config/secrets.yml"

# Default value for linked_dirs is []
# append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets", "public/system"

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for local_user is ENV['USER']
# set :local_user, -> { `git config user.name`.chomp }

# Default value for keep_releases is 5
# set :keep_releases, 5

# Uncomment the following to require manually verifying the host key before first deploy.
# set :ssh_options, verify_host_key: :secure
