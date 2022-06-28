class AdminhelpController < ApplicationController
  skip_before_action :verify_authenticity_token

  def what_do_to_help
    popup_data = PostBlock.where(block_type: "what_do_to_help").first_or_create
    popup_data.name = params[:name]
    popup_data.text = params[:text]
    popup_data.save
    save_lang_fields(popup_data, params[:lang], ["text", "name"])
    redirect_back(fallback_location: "/admin")
  end

  def why_means_financing_orange
    popup_data = PostBlock.where(block_type: "why_means_financing_orange").first_or_create
    popup_data1 = PostBlock.where(block_type: "why_means_financing_orange1").first_or_create
    popup_data.add_data = params[:add_data]
    popup_data.name = params[:name]
    popup_data.text = params[:text]
    popup_data.save
    popup_data1.add_data = params[:add_data1]
    popup_data1.text = params[:text1]
    popup_data1.save
    save_lang_fields(popup_data, params[:lang], ["add_data", "text", "name"])
    save_lang_fields(popup_data1, params[:lang1], ["add_data", "text"])
    redirect_back(fallback_location: "/admin")
  end

  def why_means_financing
    popup_data = PostBlock.where(block_type: "why_means_financing").first_or_create
    popup_data.add_data = params[:add_data]
    popup_data.name = params[:name]
    popup_data.text = params[:text]
    popup_data.save
    save_lang_fields(popup_data, params[:lang], ["add_data", "text", "name"])
    redirect_back(fallback_location: "/admin")
  end

  def is_it_worth_it
    popup_data = PostBlock.where(block_type: "is_it_worth_it").first_or_create
    popup_data.add_data = params[:add_data]
    popup_data.name = params[:name]
    popup_data.text = params[:text]
    popup_data.save
    save_lang_fields(popup_data, params[:lang], ["add_data", "text", "name"])
    redirect_back(fallback_location: "/admin")
  end

  def shake_hands
    popup_data = PostBlock.where(block_type: "shake_hands").first_or_create
    popup_data.add_data = params[:add_data]
    popup_data.text = params[:text]
    popup_data.save
    save_lang_fields(popup_data, params[:lang], ["add_data", "text"])
    redirect_back(fallback_location: "/admin")
  end

  def save_lang_fields(popup_data, params, fields)
    SiteLang.all.each do |l|
      fields.each do |f|
        field_to_save = popup_data.lang_options.where(site_lang: l).where(name: f).first_or_create
        field_to_save.value = params[l.id.to_s][f]
        field_to_save.save
      end
    end
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
        save_lang_fields(page, page_params, ['text'])
      end
    end

    redirect_back(fallback_location: "/admin")
  end
end
