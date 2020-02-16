Rails.application.routes.draw do
  
  devise_scope :user do
    get 'sign_in', to: 'devise/sessions#new'
  end
  devise_for :users, controllers: {
                                  sessions: 'users/sessions'
                                  }
   root to: 'users/sessions#new'
end
