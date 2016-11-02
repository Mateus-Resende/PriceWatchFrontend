class ProductsController < ApplicationController
  def index
  	
  	@page = (params[:page] ||= 1).to_i
  	@per_page = (params[:per_page] ||= 7).to_i

	@products = Product.search(params)
	@fields = Product.get_fields(@products)

  	@products = @products.skip((@page-1) * @per_page).limit(@per_page)
  
	@num_pages = num_pages

  end
 
	private
		def num_pages
			decimal = @products.count.to_f / @per_page.to_f
			pages = decimal.to_i

			if decimal - pages > 0
				pages += 1
			end
		end
end
