class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render 'api/main/main'
    else
      render json: ["Email already exists"], status: 401
    end

  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
  
end