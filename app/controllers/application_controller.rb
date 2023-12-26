# frozen_string_literal: true

# ApplicationController is the main controller from which all other controllers inherit.
# It includes protections against Cross-Site Request Forgery attacks.
class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
end
