# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

riker = User.create!(username: 'riker', email: 'riker@risa.com', password: '654321', img_url: 'https://i.imgur.com/ESdwTHT.jpg', division: 'command', rank: 'commander')