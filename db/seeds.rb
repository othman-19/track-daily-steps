# frozen_string_literal: true

19.times do |n|
  name = Faker::Name.name
  email = "example#{n + 1}@fakemail.com"
  password = 'password'
  User.create!(name: name,
               email: email,
               password: password,
               password_confirmation: password)
  # activated: true,
  # activated_at: Time.zone.now
end

10.times do |n|
  name = Faker::ProgrammingLanguage.name
  description = Faker::Lorem.sentence(5)
  start_date = Faker::Date.in_date_period(year: 2020, month: 1)
  end_date = Faker::Date.in_date_period(year: 2020, month: 12)
  Project.create!(name: name,
                  description: description,
                  start: start_date,
                  end: end_date)
end
  

users = User.order(:created_at).take(5)
id = Project.find(1).id

4.times do
  description = Faker::Lorem.sentence(5)
  start = Faker::Date.in_date_period(year: 2020, month: 1)
  users.each { |user| user.goals.create!(description: description,
                                         start:start,
                                         project_id:Project.find(id).id ) }
  id += 1
end