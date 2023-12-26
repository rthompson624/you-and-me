# frozen_string_literal: true

module Api
  # PostsController handles the CRUD operations for Post model.
  # It provides actions to list, show, create, update, and delete posts.
  class PostsController < ApplicationController
    before_action :set_post, only: %i[show update destroy]

    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    def index
      @posts = Post.all.order(created_at: :desc)
      render json: @posts
    end

    def show
      render json: @post
    end

    def create
      @post = Post.new(post_params)

      if @post.save
        render json: @post, status: :created
      else
        render json: @post.errors, status: :unprocessable_entity
      end
    end

    def update
      if @post.update(post_params)
        render json: @post, status: :ok
      else
        render json: @post.errors, status: :unprocessable_entity
      end
    end

    def destroy
      @post.destroy
      render json: @post, status: :ok
    end

    private

    def set_post
      @post = Post.find(params[:id])
    end

    def record_not_found
      render json: { error: 'Post not found' }, status: :not_found
    end

    def post_params
      params.require(:post).permit(
        :message
      )
    end
  end
end
