Rails.application.routes.draw do

  get 'api/posts' => 'api#get_posts'
  get 'api/post/:id' => 'api#get_post'
  post 'api/post' => 'api#save_post'

end
