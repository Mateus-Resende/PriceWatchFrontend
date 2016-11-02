class ProductsController < ApplicationController

	def index
		@products = Product.search(params)
		@fields = Product.get_fields(@products)

		page = params[:page] ? params[:page] : 1
  	per_page = params[:per_page] ? params[:per_page] : 20

		@products = @products.skip((page-1) * per_page).limit(per_page)
	end


end
