ActiveAdmin.register Post do
  config.batch_actions = false
  actions :all, except: [:show]
  config.sort_order = "name_desc"
  config.per_page = 200
  config.current_filters = false

  filter :name

  controller do
    defaults finder: :find_by_slug

    def permitted_params
      params.permit!
    end
  end

  index do
    column :id
    #column :outer_id
    column :name
    column :logo do |post|
      if post.logo.attached?
        image_tag post.logo, width: 200
      elsif post.logo_url
        image_tag post.logo_url, width: 200
      else
        ""
      end
    end

    column "link" do |post|
      "https://dont-fund-russian.army/#{post.slug}.html"
    end

    column "Active" do |elem|
      link_to image_tag(elem.active ? "/assets/admin/on.png" : "/assets/admin/off.png", id: "active_#{elem.id}"), "#{resource_path(elem)}/active", remote: true
    end
    actions
  end

  collection_action :sort, :method => :post do
    params[:ids].each_with_index do |id, index|
      artwork = Company.find(id)
      artwork.update_attribute(:position, index.to_i + 1)
    end
    head 200
  end

  member_action :active do
    elem = Post.friendly.find(params[:id])
    elem.update_column(:active, !elem.active)
    render js: elem.active ? "$('#active_#{elem.id}').attr('src','/assets/admin/on.png')" : "$('#active_#{elem.id}').attr('src','/assets/admin/off.png')"
  end

  form partial: "form"
end
