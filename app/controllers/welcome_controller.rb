class WelcomeController < ApplicationController
  def index
  	@products = Product.paginate(:per_page => 5, :page => params[:page])
    @categorias = Product.fields.keys.sort()
    @aux=[]
    @testes=[]
    @storage=[]
    @categorias.each do |key|
	    if(key !="_id" and key !="img_url" and key !="name")
	      @aux.push(key)
      end
      if(key == "storage")
        @storage.push(key)
      end
	  end
    @aux.each do |teste|
      if teste == 'storage'
        #@storage.push(Product.distinct)
         @teste.each_with_object({}) do |x, memo|
            x.keys()
            if(x["HD"])
                       
            end   
            if(x["SSD"])

            end
         end
      else 
        @testes.push(Product.distinct(teste)) #.reject(&:blank?).compact.sort
       # binding.pry
      end
    end
  end

  # api/query
  def query
  end
end
