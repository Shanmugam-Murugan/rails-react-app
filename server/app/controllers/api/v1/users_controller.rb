class Api::V1::UsersController < ApplicationController
  ALLOWED_DATA = %[name email phone].freeze

  def index
    users = User.all
    render json: users
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  def create
    data = json_payload.select {|k| ALLOWED_DATA.include?(k)}
    user = User.new(data)
    if user.save
      render json: user
    else
      render json: {"error": "could bot created."}
    end
  end
  
  def update
    user = User.find(params[:id].to_i)
    data = json_payload.select {|k| ALLOWED_DATA.include?(k)}
    if user.update(data)
      render json: user
    else
      render json: { "error": 'Could not update it' }
    end
  end
  
  def destroy
    user  = User.find(params[:id])
    if user.destroy
      render json: {status: "Deleted successfully."}
    end
  end
end
