class AdminhelpController < ApplicationController
  skip_before_action :verify_authenticity_token

  def what_do_to_help
    popup_data = PostBlock.where(block_type: "what_do_to_help").first_or_create
    popup_data.name = params[:name]
    popup_data.text = params[:text]
    popup_data.save
    redirect_back(fallback_location: "/admin")
  end

  def how_funded
    #params.permit!
    ids = []
    params[:block].each do |page_params|
      #page_params = page_param[1][0]
      ids.push(page_params["id"])
      page = page_params["id"] == "0" ? PostBlock.new(block_type: "how_war_funded") : PostBlock.find(page_params["id"])
      if page_params["destroy"].to_i == 1
        page.destroy
      else
        page.text = page_params["text"]
        page.image = page_params["image"] if !page_params["image"].blank?
        page.save
      end
    end

    redirect_back(fallback_location: "/admin")
  end
end
