Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      # resources :users, defaults: { formats: :json}
      get '/users', to: 'users#index'
      post '/users', to: 'users#create'
      get '/users/:id', to: 'users#show'
      patch '/users/:id', to: 'users#update'
      delete '/users/:id', to: 'users#destroy'
    end
  end
end
