class HomeController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    render file: "public/static/index.html", layout: false
    #get_seo
  end

  def send_email
    ApplicationMailer.send_mail(params[:text], params[:page_from]).deliver_now
    render plain: true
  end
end
