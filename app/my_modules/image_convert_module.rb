module ImageConvertModule
  def image_resize(size, image_file = "image", format = "")
    begin
      if self.send(image_file).content_type.match("svg")
        self.send(image_file).attached? ? self.send(image_file) : ""
      else
        self.send(image_file).attached? ? self.send(image_file).variant(resize_options(size, format)).processed.url : ""
      end
    rescue
      ""
    end
  end

  def get_image_resize(size, image_file = "image", format = "")
    begin
      self.send(image_file).attached? ? self.send(image_file).variant(resize_options(size, format)).url : ""
    rescue
      ""
    end
  end

  def resize_options(size, format)
    options = { quality: 80, strip: true, interlace: "plane" }
    if size.match(">")
      options[:resize_to_fit] = size.gsub(">", "").split("x")
    else
      options[:resize_to_fill] = size.split("x")
    end
    if format == "webp"
      options[:format] = :webp
      options[:saver] = { quality: 80 }
    else
      options[:format] = :png
      options[:saver] = { quality: 80, define: { png: { compression: 2 } } }
    end
    return options
  end

  def set_gallery_position
    if self.gallery
      self.gallery.each do |gal|
        gal.position = (self.gallery.pluck(:position).compact.max || 0) + 1 if (gal.position.blank? || gal.position == "" || gal.position == nil)
      end
    end
  end

  def image_helper(size, main_field = "image")
    images = []
    #order of images imortant (first one is webp)
    #TODO
    # image_webp = self.get_image_resize(size, main_field, "webp")
    # image = self.get_image_resize(size, main_field)
    image_webp = self.image_resize(size, main_field, "webp")
    image = self.image_resize(size, main_field)
    images.push({ img: image_webp ? image_webp : self.image_resize(size, main_field, "webp"), content: "webp" }) if self.send(main_field).attached? #try webp
    images.push({ img: image ? image : self.image_resize(size, main_field), content: "png" }) if self.send(main_field).attached?
    return images
  end
end
