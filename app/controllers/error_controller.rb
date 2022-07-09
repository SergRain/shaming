class ErrorController < ApplicationController
  def not_found
    request.original_fullpath
    #find static file
    render inline: File.read("#{Rails.root}/public/static/#{request.original_fullpath.split("/").last.split("?")[0]}")
    #render json: request.original_fullpath
  end
end
