# frozen_string_literal: true

99.times do |n|
  name = Faker::Name.name
  email = "example-#{n + 1}@somemail.com"
  password = 'password'
  User.create!(name: name,
               email: email,
               password: password,
               password_confirmation: password)
  # activated: true,
  # activated_at: Time.zone.now
end