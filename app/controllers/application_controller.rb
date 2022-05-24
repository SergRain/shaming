class ApplicationController < ActionController::Base
  before_action :set_host

  def get_seo(post = nil)
    @seo_title = SiteConfig.find(1).value
    @seo_description = SiteConfig.find(2).value
    @seo_image = SiteConfig.find(3).file.url

    if post
      @seo_title = post.seo_title unless post.seo_title.blank?
      @seo_description = post.seo_description unless post.seo_description.blank?
      @seo_image = post.seo_image.url if post.seo_image.attached?
    end
  end

  private

  def set_host
    ActiveStorage::Current.url_options = { protocol: request.protocol, host: request.host, port: request.port }
  end
end
