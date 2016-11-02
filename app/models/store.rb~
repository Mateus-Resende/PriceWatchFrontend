class Store
  include Mongoid::Document
  field :price, type: Float
  field :sku, type: String
  field :store, type: String
  field :available, type: Boolean
  field :url, type: String
  
  embedded_in :product, :inverse_of => :stores
  
end
