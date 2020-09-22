class DeleteRankFromUsers < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :rank
  end
end
