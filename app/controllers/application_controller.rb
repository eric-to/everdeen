class ApplicationController < ActionController::Base
  helper_method :current_user, :signed_in?

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end
  
  def sign_in(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end

  def sign_out
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def signed_in?
    !!current_user
  end

  def require_sign_in
    # redirect_to somewhere else unless logged in
  end

end
