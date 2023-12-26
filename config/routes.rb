# frozen_string_literal: true

Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # React web client
  root to: 'site#index'
  get '*path', to: 'site#index', constraints: ->(req) { !req.xhr? && req.format.html? }

  namespace :api do
    resources :posts, only: %i[index show create update destroy]
  end

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get 'up' => 'rails/health#show', as: :rails_health_check
end
