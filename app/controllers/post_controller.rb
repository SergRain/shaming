class PostController < ApplicationController
  def show
    @post = Post.friendly.find(params[:post_id])
    @news = NewsItem.includes(:lang_options).where(active: true).order(position: :asc)
    @phrase = PeoplePhraase.includes(:lang_options).where(active: true).order(position: :asc)
    @lang = @post.site_lang.blank? ? nil : @post.site_lang
    #srender json: @lang
    get_seo(@post)
  end
end
