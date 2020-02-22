class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  # skip_before_action :verify_authenticity_token
  # protect_from_forgery unless: -> { request.format.json? }
  protect_from_forgery :except => [:create]


  before_action :configure_sign_up_params, if: :devise_controller?
  protected

  def configure_sign_up_params
    devise_parameter_sanitizer.permit(:sign_up, keys: %i[name email password])
  end
end
