# frozen_string_literal: true

# ApplicationRecord is an abstract class that is inherited by all models in the application.
# This is a great place to put any logic that is applicable to all your models.
class ApplicationRecord < ActiveRecord::Base
  primary_abstract_class
end
