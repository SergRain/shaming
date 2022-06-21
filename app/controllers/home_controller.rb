class HomeController < ApplicationController
  def index
    render file: "public/static/index.html", layout: false
    #get_seo
  end
end
