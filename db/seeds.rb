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

users = User.order(:created_at).take(5)
4.times do
  description = Faker::Lorem.sentence(5)
  start = Faker::Date.in_date_period(year: 2020, month: 1)
  users.each { |user| user.goals.create!(description: description,
                                         start:start) }
end