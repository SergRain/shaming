ActiveAdmin.register SiteLang do
  config.batch_actions = false
  actions :index, :edit, :update, :new, :create
  config.sort_order = "id_asc"
  config.per_page = 100
  config.current_filters = false

  filter :name

  controller do
    def permitted_params
      params.permit!
    end
  end

  index do
    column :id
    column :name
    actions
  end

  form do |f|
    f.inputs do "Config"
      f.input :name
    end
    f.actions
  end
end
