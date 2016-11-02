module ProductsHelper
	def products_paginate(num_pages, current)
		low = current - 2;
		high = current + 2;

		if(low < 0)
			high += (low * -1)
		end

		if high > num_pages
			low -= (high - current)
		end

		links = ""

		c = "products_page"

		if(current != 1)
			links << (link_to 'Anterior', request.params.merge({page: current-1}), class: c, remote: true).to_s
		end

		(low..high).step(1) do |n|
			if n > 0 and n <= num_pages								
				
				t = (n == current) ? " current" : ""

				links << (link_to "#{n}", request.params.merge({page: n}), class: c + t, remote: true).to_s
			end
		end

		if(current != num_pages)
			links << (link_to "Próxima", request.params.merge({page: current+1}), class: c, remote: true).to_s
		end
		#links = links.html_safe
		raw links
	end

	def product_features(product, *features)
		div = '<div class="product_features"><h1>Detalhes do produto:</h1>'
		features.each do |k|
			value = product.send(k)
			key = k.to_s.titleize
			div << "<div class='feature'><div class='key'>#{key}</div><div class='value'>#{value}</div></div>"
		end
		div << "</div>"
		#result = div.html_safe
		raw div
	end

	def material_buttons(content, *classes)
		
		cs = ""
		classes.each do |c|
			cs << "#{c} "
		end
		cs = cs.strip

		btn = "<button class='#{cs}'><i class='material-icons'>#{content}</i></button>"
		#result = btn.html_safe
		raw btn
	end
end
