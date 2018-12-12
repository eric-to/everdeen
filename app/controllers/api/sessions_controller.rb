class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      sign_in(@user)
      render json: ['SUCCESSFUL SIGNIN!']
    else
      render json: ['Unable to log in with provided credentials.'], status: 401
    end
  end

  def destroy
    if current_user
      sign_out
      render json: ['BOO, YOU SIGNED OUT!']
    else
      render json: ['ALREADY LOGGED OUT!'], status: 404
    end
  end

end
