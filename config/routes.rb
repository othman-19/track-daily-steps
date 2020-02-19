Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'users/registrations'}
  as :user do
    authenticated :user do
      root 'welcome#welcome', as: :authenticated_root
    end
    unauthenticated do
      root 'users/registrations#new', as: :unauthenticated_root
    end
  end
  resources :projects
  resources :goals
  resources :users, only: %i[index show]
end
