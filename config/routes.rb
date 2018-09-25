Rails.application.routes.draw do
  devise_for :users
  namespace :api do
    namespace :v1 do
      resources :movies
      resources :lists
    end
  end
  get '/users/check_for_user' => 'application#check_for_user'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
