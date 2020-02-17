# frozen_string_literal: true

require 'rails_helper'
RSpec.describe GoalsController, type: :controller do
  context 'DELETE#destroy' do
    let(:user1) { User.create(name: 'John', email: 'john@mail.com', password: 'password') }
    let(:creator) { User.create(name: 'creator', email: 'creaor@gmail.com', password: 'password') }
    let(:project1) {Project.create(name: 'React',
                                  description: 'Neque porro quisquam est qui dolorem ipsum',
                                  start: 2020-02-17,
                                  end: 2021-02-17
                                  )}
    let(:new_goal) { creator.goals.create!(description: 'Neque porro quisquam est qui dolorem ipsum',
                                          start: 2020-02-17,
                                          project_id:project1.id)}

    it 'A user cannot delete a goal created by other user' do
      new_goal.save
      p new_goal
      sign_in user1
      expect { delete :destroy, params: { id: new_goal.id } }.to change(Goal, :count).by(0)
      # expect(flash[:notice]).to eq 'Product was successfully deleted.'
    end
  end
end
