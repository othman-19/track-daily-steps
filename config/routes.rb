Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'users/registrations'}
  as :user do
    authenticated :user do
      root 'users#index', as: :authenticated_root
    end
    unauthenticated do
      root 'users/registrations#new', as: :unauthenticated_root
    end
  end
  resources :users, only: %i[index show]
  resources :projects
  resources :goals
end
