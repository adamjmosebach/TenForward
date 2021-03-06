Rails.application.routes.draw do
  resources :comments
  resources :posts
  resources :users
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  post '/posts/:id/comments', to: 'comments#add_comment_to_post'
  delete '/posts/:post_id/comments/:id', to: 'comments#destroy'
  put '/posts/:post_id/comments/:id', to: 'comments#update'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
