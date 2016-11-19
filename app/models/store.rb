class Store
  include Mongoid::Document
  field :price, type: Float
  field :sku, type: String
  field :retailer, type: String
  field :available, type: Boolean
  field :url, type: String

  embedded_in :parent, :inverse_of => :stores
  
end
