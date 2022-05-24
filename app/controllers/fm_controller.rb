class FmController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :check_admin

  def check_admin
    redirect_to "/" unless admin_user_signed_in?
  end

  def index
    #render json: params
    #end
    self.class.layout "fm"
  end

  def upload
    subdir = File.join("ckeditor_assets")
    file = params[:upload]
    #result = do_upload_editor_images(params[:files], subdir)
    dir = File.join(Rails.root, "public", subdir)

    # name = file.original_filename.gsub(/[^a-zа-яA-ZА-Я1-9.]/, "").to_s
    name = sanitize_filename(file.original_filename)

    path = File.join(dir, name)
    iter = 0
    while File.file?(path)
      ext = File.extname(path)
      name = name.gsub("_#{iter - 1}", "").gsub(ext, "") + "_#{iter}#{ext}"
      iter += 1
      path = File.join(dir, name)
    end

    File.open(path, "wb") { |f| f.write(file.read) }

    render json: {
             "uploaded": 1,
             "fileName": name,
             "url": File.join("/", subdir, name),
           }
  end

  def elfinder
    #get_params_target = params[:target]
    #new_params = params.except(:target)
    # new_params[:target] = get_params_target.blank? ? "Lg" : get_params_target
    # new_params[:upload] = []
    # if params[:upload]
    #   params[:upload].each do |file|
    #     file["original_filename"] = sanitize_filename(file["original_filename"])
    #     new_params[:upload].push(file)
    #   end
    # end
    #render json: new_params
    #new_params["target"] = "Lg"
    h, r = ElFinder::Connector.new(
      :root => File.join(Rails.root, "public", "ckeditor_assets"),
      :url => "/ckeditor_assets",
      :perms => {
        "forbidden" => { :read => false, :write => false, :rm => false },
        /README/ => { :write => false },
        /robots.txt/ => { :read => false, :write => false, :rm => false },
        /pjkh\.png$/ => { :write => false, :rm => false },
      },
      :extractors => {
        "application/zip" => ["unzip", "-qq", "-o"],
        "application/x-gzip" => ["tar", "-xzf"],
      },
      :archivers => {
        "application/zip" => [".zip", "zip", "-qr9"],
        "application/x-gzip" => [".tgz", "tar", "-czf"],
      },
      :thumbs => false,
      :upload_max_size => 1000000000,
    ).run(params)

    headers.merge!(h)
    if r.empty?
      head 200
    else
      render plain: r.to_json
    end
    ##render (r.empty? ? { :nothing => true } : { :text => r.to_json }), :layout => "fm"
  end

  def sanitize_filename(filename)
    new_name = filename
    new_name.strip!
    new_name.gsub!(/^.*(\\|\/)/, "")

    # Strip out the non-ascii character
    new_name.gsub!(/[^a-zа-яA-ZА-Я1-9.\-]/, "_")
    temp = new_name.split(".")
    new_name = "#{temp[0][0..30]}.#{temp[1]}"

    return new_name
  end
end
