ActiveAdmin.register SiteConfig do
  config.batch_actions = false
  actions :index, :edit, :update
  config.sort_order = "id_asc"
  config.per_page = 100
  config.current_filters = false

  filter :name
  filter :value

  controller do
    def permitted_params
      params.permit!
    end
  end

  index do
    column :id
    column :name

    column :value
    actions
  end

  form do |f|
    f.inputs do "Config"
      if !f.object.id
      f.input :id
      f.input :name
      f.input :value
      f.input :file, as: :file
    else
      f.input :name, input_html: { readonly: true }
      if f.object.id.in?([1, 2])
        f.input :value, as: :string
      end

      if f.object.id.in?([3])
        f.input :file, as: :file, hint: f.object.file.attached? ? (image_tag f.object.file) : ""
      end
    end     end
    f.actions
  end
end
