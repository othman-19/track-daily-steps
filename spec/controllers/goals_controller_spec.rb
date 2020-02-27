require 'rails_helper'

RSpec.describe API::GoalsController, type: :controller do
  let(:user) { FactoryBot.create(:user) }
  let(:project) { FactoryBot.create(:project) }
  let (:goal) {
    FactoryBot.create(:goal) {
      user_id = user.id
      project_id = project.id
    }
  }
  describe 'GET /goals' do
    before do
      sign_in user
      project.save
      goal.save
      get :index
    end
    it 'returns goals' do
      result = JSON(response.body)
      expect(result).not_to be_empty
      expect(result.size).to eq(1)
    end
    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET /goals/:id' do
    before do
      sign_in user
      get :show, params: { id: goal.id }
    end

    context 'the record exists' do
      it 'returns the goal' do
        result = JSON(response.body)
        expect(result).not_to be_empty
        expect(result["goal"]["id"]).to eq(goal.id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end
  end

  describe 'POST /goals' do
    render_views
    let(:valid_attributes) { { name: 'Test',
                               description: 'controller test',
                               start: Time.new,
                               end:  Time.new + 60000,
                               user_id: user.id,
                               project_id: project.id } }

    context 'when the request is valid' do
      before do
        sign_in user
        post :index, params: valid_attributes
      end
      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end
  end


end
