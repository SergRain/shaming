class PostController < ApplicationController
  def show
    @post = Post.friendly.find(params[:post_id])
    @news = NewsItem.where(active: true).order(position: :asc)
    @phrase = PeoplePhraase.where(active: true).order(position: :asc)
    get_seo(@post)
  end
end
