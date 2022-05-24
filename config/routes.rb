Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  post "/adminhelp/how_funded", to: "adminhelp#how_funded"
  post "/adminhelp/what_do_to_help", to: "adminhelp#what_do_to_help"
  mount Ckeditor::Engine => "/ckeditor"
  get "fm/index"
  post "fm/index", to: "fm#upload"
  post "fm/index&responseType=json", to: "fm#upload"
  match "elfinder", to: "fm#elfinder", via: :all
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  get "/:post_id.html", to: "post#show", constraints: lambda { |request| Post.where(slug: request[:post_id]).any? }
  get "/index.html", to: "home#index"
  root "home#index"
end
