ActiveAdmin.register Company do
  menu parent: "Companies"

  config.batch_actions = false
  actions :all, except: [:show]
  config.sort_order = "position_asc"
  config.per_page = 200
  config.current_filters = false

  filter :name
  filter :company_industry
  filter :company_status

  controller do
    def permitted_params
      params.permit!
    end
  end

  index do
    column :id
    #column :outer_id
    column :name do |resource|
      content_tag(:span, resource.name, "data-id" => resource.id, class: "sortable_rows")
    end
    column :image do |elem|
      image_tag elem.logo, width: 200 if elem.logo.attached?
    end
    column :company_industry
    column :company_status
    column :action

    column "Active" do |elem|
      link_to image_tag(elem.active ? "/assets/admin/on.png" : "/assets/admin/off.png", id: "active_#{elem.id}"), "#{resource_path(elem)}/active", remote: true
    end
    #actions
  end

  collection_action :sort, :method => :post do
    params[:ids].each_with_index do |id, index|
      artwork = Company.find(id)
      artwork.update_attribute(:position, index.to_i + 1)
    end
    head 200
  end

  member_action :active do
    elem = Company.find(params[:id])
    elem.update_column(:active, !elem.active)
    render js: elem.active ? "$('#active_#{elem.id}').attr('src','/assets/admin/on.png')" : "$('#active_#{elem.id}').attr('src','/assets/admin/off.png')"
  end

  form do |f|
    if f.object.errors.size > 0
      f.inputs "Помилки", class: "form_errors" do
        f.object.errors.full_messages.join("<br />").html_safe
      end
    end
    div(class: "tabs") do
      ul(class: "nav nav-tabs", role: "tablist") do
        li { link_to "Основна інформація", "#main_info" }
        li { link_to "Галерея згори", "#gallery_top" }
        li { link_to "Повна галерея", "#gallery_bottom" }
        li { link_to "SEO", "#seo" }
      end
      div(class: "tab-content") do
        div(id: "main_info") do
          f.inputs do
            f.input :date, as: :datepicker
            f.input :image, as: :hidden, input_html: { value: f.object.image.signed_id } if f.object.image.attached?
            f.input :image, label: "Картинка", input_html: { class: "changer_image", direct_upload: true, accept: "image/*" }, as: :file, hint: image_tag(f.object.image.attached? ? (f.object.image) : "", class: "changer_image_result", width: 300, id: "image_#{f.object.image.id if f.object.image.attached?}")
            f.input :main_photo_title
            #f.template.concat (link_to "Видалити картинку", delete_image_admin_news_item_path(f.object.image.id), method: :delete, id: "image_remove_#{f.object.image.id}", remote: true, data: { confirm: "Ви впевнені?" } if f.object.image.attached? and f.object.image.id)
            f.input :name_uk
            f.input :name_en
            f.input :is_special
            f.input :lead_uk
            f.input :lead_en
            f.input :text_uk, as: :ckeditor
            f.input :text_en, as: :ckeditor

            f.input :active
          end
        end
        div(id: "gallery_top") do
          f.inputs do
            div "Галерея у шапці", class: "galleries inputs" do
              li class: "has_many_container gallery", 'data-sortable': "position", 'data-sortable-start': 0 do
                f.object.gallery_top.order(:position).each_with_index do |image, i|
                  render partial: "admin/news_items/gallery_item", locals: { i: i, image: image, item_id: f.object.id }
                end if f.object.gallery_top
                f.file_field :my_gallery, multiple: true
              end
            end
          end
        end
        div(id: "gallery_bottom") do
          f.inputs do
            div "Галерея", class: "galleries inputs" do
              li class: "has_many_container gallery", 'data-sortable': "position", 'data-sortable-start': 0 do
                f.object.gallery_bottom.order(:position).each_with_index do |image, i|
                  render partial: "admin/news_items/gallery_item", locals: { i: i, image: image, item_id: f.object.id }
                end if f.object.gallery_bottom
                f.file_field :my_gallery_bottom, multiple: true
              end
            end
          end
        end
        div(id: "seo") do
          f.inputs do
            f.input :seo_title_uk
            f.input :seo_title_en
            f.input :seo_description_uk
            f.input :seo_description_en
          end
        end
      end
    end

    f.actions
  end
end
