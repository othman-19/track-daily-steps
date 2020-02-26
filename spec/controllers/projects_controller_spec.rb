require 'rails_helper'

RSpec.describe API::ProjectsController, type: :controller do
  let(:user) { FactoryBot.create(:user) }
  let(:project) { FactoryBot.create(:project) }
  describe 'GET /projects' do
    before do
      project.save
      sign_in user
      get :index
    end
    it 'returns projects' do
      result = JSON(response.body)
      expect(result).not_to be_empty
      expect(result.size).to eq(1)
    end
    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET /projects/:id' do
    before do
      sign_in user
      get :show, params: { id: project.id }
    end

    context 'when the record exists' do
      it 'returns the project' do
        result = JSON(response.body)
        expect(result).not_to be_empty
        expect(result["project"]["id"]).to eq(project.id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end
  end

  describe 'POST /projcts' do
    render_views
    let(:valid_attributes) { { name: 'Test',
                               description: 'controller test',
                               start: Time.new,
                               end:  Time.new + 60000 } }

    context 'when the request is valid' do
      before do
        sign_in user
        post :index, params: { name: 'Test',
                              description: 'controller test',
                              start: Time.new,
                              end:  Time.new + 60000 }
      end
      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end
  end


end
