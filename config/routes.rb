Rails.application.routes.draw do
  resources :projects
  resources :goals
  devise_for :users, controllers: { registrations: 'users/registrations'}
  as :user do
    authenticated :user do
      root 'goals#index', as: :authenticated_root
    end
    unauthenticated do
      root 'users/registrations#new', as: :unauthenticated_root
    end
  end
  resources :users, only: %i[index show]
end
