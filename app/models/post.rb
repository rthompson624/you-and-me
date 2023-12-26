# frozen_string_literal: true

# Post is a model that represents a post.
class Post < ApplicationRecord
  validates :message, presence: true
end
