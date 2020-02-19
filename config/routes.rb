Rails.application.routes.draw do
  namespace :api, defaults: { format: 'json' } do
    resources :goals, only: :index
    resources :projects, only: :index
  end
  devise_for :users, controllers: { registrations: 'users/registrations'}
  as :user do
    authenticated :user do
      root 'pages#index', as: :authenticated_root
    end
    unauthenticated do
      root 'users/registrations#new', as: :unauthenticated_root
    end
  end
  resources :users, only: %i[index show]
  match '*path', to: 'pages#index', via: :all
end
