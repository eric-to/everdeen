class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      sign_in(@user)
      # render 'api/users/show'
      render json: ['YAY!']
    else
      render json: ['Unable to log in with provided credentials.'], status: 401
    end
  end

  def destroy
    if current_user
      sign_out
      render json: ['BOO!']
    else
      render json: ['HMM!'], status: 404
    end
  end

end
