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
Projects = ['Ruby on rails', 'Ruby', 'JavaScript', 'Webpack', 'React', 'Rspec','Redux', 'Algorithmes and Data structures', 'Professional skills', 'Career preparation' ]
10.times do |n|
  name = Projects[n]
  description = Faker::Lorem.sentence(5)
  start_date = Faker::Time.between(from: DateTime.now - 1, to: DateTime.now) #=> "2014-09-18 12:30:59 -0700"
  end_date = Faker::Time.between(from: DateTime.now - 1, to: "2021-01-03 00:00:00")
  Project.create!(name: name,
                  description: description,
                  start: start_date.to_time,
                  end: end_date.to_time)
end
  

users = User.order(:created_at).take(5)
id = Project.find(1).id

4.times do
  description = Faker::Lorem.sentence(5)
  start = Faker::Time.between(from: DateTime.now - 1, to: DateTime.now)
  users.each { |user| user.goals.create!(description: description,
                                         start:start.to_time,
                                         project_id:Project.find(id).id ) }
  id += 1
end