# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Goal, type: :model do
  describe 'Goal model validation' do
    let(:goal) { FactoryBot.create(:goal) }
    let(:goal_big_content) { FactoryBot.build(:goal_big_content) }

    it 'has a valid factory' do
      expect(goal).to be_valid
    end

    it 'is invalid without a content' do
      goal.description = nil
      expect(goal).to_not be_valid
    end

    it 'is invalid without a user_id' do
      goal.user_id = nil
      expect(goal).to_not be_valid
    end

    it 'is invalid with content above three hundred(300) characters of length' do
      expect(goal_big_content).to_not be_valid
    end
  end
  describe 'Goal model associations' do
    it 'belongs to user' do
      assc = Goal.reflect_on_association(:user)
      expect(assc.macro).to eq :belongs_to
    end
    it 'belongs to project' do
      assc = Goal.reflect_on_association(:project)
      expect(assc.macro).to eq :belongs_to
    end
  end
end
