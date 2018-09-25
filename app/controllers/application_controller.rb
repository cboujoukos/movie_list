class ApplicationController < ActionController::API
  def check_for_user
    if !!current_user
      return {data: current_user.email}
    else
      return {data: {}}
  end
end
