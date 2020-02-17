# frozen_string_literal: true

require 'faker'

FactoryBot.define do
  factory :goal, class: Goal do |f|
    association :user, factory: :user
    association :project, factory: :project
    f.description { Faker::Lorem.sentence(word_count: 2) }
    f.start { Faker::Date.in_date_period(year: 2020, month: 1) }
  end

  factory :goal_big_content, class: Goal do |f|
    association :user, factory: :user
    association :project, factory: :project
    f.description { Faker::Lorem.characters(number: 301) }
    f.start { Faker::Date.in_date_period(year: 2020, month: 1) }
  end
end
