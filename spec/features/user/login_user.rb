# frozen_string_literal: true

require 'rails_helper'
# Log in user.
RSpec.describe 'Login user', type: :feature do
  scenario 'valid inputs' do
    visit authenticated_root_path
    fill_in 'Name', with: 'Tester7'
    fill_in 'Email', with: 'tester7@gmail.com'
    fill_in 'Password', with: 'password'
    fill_in 'user_password_confirmation', with: 'password'
    click_on 'Sign up'

    click_on 'Log out'

    click_on 'Log in'
    fill_in 'Email', with: 'tester7@gmail.com'
    fill_in 'Password', with: 'password'
    click_on 'Log in'
    expect(page).to have_content('Signed in successfully')
    sleep(2)
  end
end