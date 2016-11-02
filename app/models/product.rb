class Product
  include Mongoid::Document
  field :ram_memory, type: String
  field :processor, type: String
  field :display_size, type: String
  field :brand, type: String
  field :name, type: String
  field :storage, type: Array
  field :img_url, type: String
  
  embeds_many :stores

  def self.search(params)
    query = {}

    query[:ram_memory] = params[:ram_memory] if params[:ram_memory]
    query[:processor] = params[:processor] if params[:processor]
    query[:display_size] = params[:display_size] if params[:display_size]
    query[:brand] = params[:brand] if params[:brand]
    query[:storage] = params[:storage] if params[:storage]

    Product.where(query)
  end

  def self.get_fields(products)
    fields = {}

    fields[:ram_memory] = products.distinct(:ram_memory)
    fields[:processor] = products.distinct(:processor)
    fields[:display_size] = products.distinct(:display_size)
    fields[:brand] = products.distinct(:brand)
    fields[:ram_memory] = products.distinct(:ram_memory)

    fields
  end
  
end
