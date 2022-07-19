Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  post "/adminhelp/how_funded", to: "adminhelp#how_funded"
  post "/adminhelp/what_do_to_help", to: "adminhelp#what_do_to_help"
  post "/adminhelp/shake_hands", to: "adminhelp#shake_hands"
  post "/adminhelp/is_it_worth_it", to: "adminhelp#is_it_worth_it"
  post "/adminhelp/why_means_financing", to: "adminhelp#why_means_financing"
  post "/adminhelp/why_means_financing_orange", to: "adminhelp#why_means_financing_orange"

  mount Ckeditor::Engine => "/ckeditor"
  get "fm/index"
  post "fm/index", to: "fm#upload"
  post "fm/index&responseType=json", to: "fm#upload"
  match "elfinder", to: "fm#elfinder", via: :all
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  post "/send_email", to: "home#send_email"

  # Defines the root path route ("/")
  get "/:post_id.html", to: "post#show", constraints: lambda { |request| Post.where(slug: request[:post_id]).where(active: true).any? }
  get "/index.html", to: "home#index"
  root "home#index"

  match "/404(.html)", to: "error#not_found", via: [:get, :post, :patch, :delete], as: "error_404"
end
