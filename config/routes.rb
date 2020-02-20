Rails.application.routes.draw do
  
  as :user do
    authenticated :user do
      root 'pages#index', as: :authenticated_root
    end
    unauthenticated do
      root 'pages#welcome', as: :unauthenticated_root
    end
  end
  devise_for :users

  namespace :api, defaults: { format: 'json' } do
    resources :goals, only: :index
    resources :projects, only: :index
    resources :users
  end
  
  
  match '*path', to: 'pages#index', via: :all
end
