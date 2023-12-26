# frozen_string_literal: true

class Post < ApplicationRecord
  validates :message, presence: true
end
