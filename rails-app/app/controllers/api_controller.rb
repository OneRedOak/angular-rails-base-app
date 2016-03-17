class ApiController < ApplicationController

	skip_before_filter :verify_authenticity_token

	def get_posts

		render json: {posts: Post.all.to_a}
		#render json: {id: 1, title: 'This is the first title', link: nil, text: 'This is some text right here!'}
	end

	def get_post
		render json: {post: Post.find(params['id'])}
	end

	def save_post

		Post.create({title: params['title'], link: params['link'], text: params['text']})

		render json: {status: 200}
		
	end

end