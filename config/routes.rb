Rails.application.routes.draw do
  root 'pages#index'
  resources :projects
  #get '/projects' ,to: 'welcome#index'
  resources :goals
  # devise_for :users, controllers: { registrations: 'users/registrations'}
  # as :user do
  #   authenticated :user do
  #     root 'welcome#welcome', as: :authenticated_root
  #   end
  #   unauthenticated do
  #     root 'users/registrations#new', as: :unauthenticated_root
  #   end
  # end
  # resources :users, only: %i[index show]
  match '*path', to: 'pages#index', via: :all
end
