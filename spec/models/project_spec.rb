# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Project, type: :model do
  describe 'Project model validation' do
    let(:project) { FactoryBot.create(:project) }
    let(:project_big_description) { FactoryBot.build(:project_big_description) }

    it 'has a valid factory' do
      expect(project).to be_valid
    end

    it 'is invalid without a name' do
      project.name = nil
      expect(project).to_not be_valid
    end

    it 'is invalid without a start date' do
      project.start = nil
      expect(project).to_not be_valid
    end

    it 'is invalid without a end date' do
      project.end = nil
      expect(project).to_not be_valid
    end

    it 'is invalid with description above three hundred (300) characters of length' do
      expect(project_big_description).to_not be_valid
    end
  end
  describe 'Project model associations' do
    it 'has many users' do
      assc = Project.reflect_on_association(:users)
      expect(assc.macro).to eq :has_many
    end
    it 'has many goals' do
      assc = Project.reflect_on_association(:goals)
      expect(assc.macro).to eq :has_many
    end
  end
end
