Rails.application.routes.draw do
  root 'welcome#welcome'
  
  devise_for :users
end
