# frozen_string_literal: true

require 'faker'

FactoryBot.define do
  factory :project, class: Project do |f|
    f.name { Faker::ProgrammingLanguage.name }
    f.description { Faker::Lorem.sentence(word_count: 2) }
    f.start { Faker::Date.in_date_period(year: 2020, month: 1) }
    f.end { Faker::Date.in_date_period(year: 2021, month: 1) }
  end

  factory :project_big_description, class: Project do |f|
    f.name { Faker::ProgrammingLanguage.name }
    f.description { Faker::Lorem.characters(number: 301) }
    f.start { Faker::Date.in_date_period(year: 2020, month: 1) }
    f.end { Faker::Date.in_date_period(year: 2021, month: 1) }
  end
end