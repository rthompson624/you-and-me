class AddMessageToPosts < ActiveRecord::Migration[7.1]
  def change
    add_column :posts, :message, :text
  end
end
