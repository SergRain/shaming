ActiveAdmin.register PeoplePhraase do
  actions :index, :destroy, :new, :edit, :update, :create
  config.clear_sidebar_sections!
  config.sort_order = "position_asc"
  controller do
    #defaults finder: :find_by_slug

    def permitted_params
      params.permit!
    end

    #     def new
    #   @people_phraase = PeoplePhraase.new
    #   SiteLang.all.each_with_index do |field, i|
    #     @people_phraase.lang_options << LangOption.new(name: "text", site_lang: field)
    #   end
    # end
  end

  index do
    #column :id
    column :name do |resource|
      content_tag(:span, resource.name, "data-id" => resource.id, class: "sortable_rows")
    end

    column :logo do |elem|
      image_tag elem.image_resize("90x90", "logo")
    end
    column :text
    column :active do |elem|
      link_to image_tag(elem.active ? "/assets/admin/on.png" : "/assets/admin/off.png", id: "active_#{elem.id}"), "#{resource_path(elem)}/active", remote: true
    end

    actions
  end

  member_action :active do
    elem = PeoplePhraase.find(params[:id])
    elem.update_column(:active, !elem.active)
    render js: elem.active ? "$('#active_#{elem.id}').attr('src','/assets/admin/on.png')" : "$('#active_#{elem.id}').attr('src','/assets/admin/off.png')"
  end

  collection_action :sort, :method => :post do
    params[:ids].each_with_index do |id, index|
      artwork = PeoplePhraase.find(id)
      artwork.update_attribute(:position, index.to_i + 1)
    end
    head 200
  end

  # form do |f|
  #   if f.object.errors.size > 0
  #     f.inputs "Помилки", class: "form_errors" do
  #       f.object.errors.full_messages.join("<br />").html_safe
  #     end
  #   end
  #   f.inputs do
  #     f.input :name
  #     f.input :text

  #     f.input :logo, as: :hidden, input_html: { value: f.object.logo.signed_id, id: "hidden_image_#{f.object.id}" } if f.object.logo.attached?
  #     f.input :logo, input_html: { class: "changer_image" }, as: :file, hint: image_tag(f.object.logo.attached? ? f.object.logo : "", class: "changer_image_result")
  #     f.input :active
  #   end
  #   f.actions
  # end
  form partial: "form"
end
