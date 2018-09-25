Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :movies
      resources :lists
      get '/signup' => 'users#new'
      post '/users' => 'users#create'
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
