class CreateCiphers < ActiveRecord::Migration
  def change
    create_table :ciphers do |t|
      t.text :cipher
      t.integer :tilt
      t.text :result

      t.timestamps null: false
    end
  end
end
