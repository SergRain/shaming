ActiveAdmin.register CompanyIndustry do
  menu parent: "Companies"

  config.batch_actions = false
  actions :all, except: [:show]
  config.sort_order = "name_asc"
  config.per_page = 200
  config.clear_sidebar_sections!

  controller do
    def permitted_params
      params.permit!
    end
  end

  index do
    column :id
    column :name
    column :companies
    actions
  end

  form do |f|
    if f.object.errors.size > 0
      f.inputs "Errors", class: "form_errors" do
        f.object.errors.full_messages.join("<br />").html_safe
      end
    end
    f.inputs do
      f.input :name
    end
    f.actions
  end
end
