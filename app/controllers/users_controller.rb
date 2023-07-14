class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :user_unprocessable

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  # include: ['user_organizations', 'user_organizations.donations'],

  def show
    render json: User.find(session[:user_id]), status: :ok
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation, :avatar_url, :bio)
  end

  def user_unprocessable(e)
    render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
  end

  def user_not_found
    render json: { errors: ['User not found'] }, status: :unauthorized
  end
end

