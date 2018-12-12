class Api::UsersController < ApplicationController
  def create
    @user = User.create(user_params)
    if @user.save
      sign_in(@user)
      render json: ['SUCCESSFUL SIGNUP!']
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :first_name, :last_name, :password)
  end

end
