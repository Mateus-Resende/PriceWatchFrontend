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
			links << (link_to t(:previous), request.params.merge({page: current-1}), class: c, remote: true).to_s
		end

		(low..high).step(1) do |n|
			if n > 0 and n <= num_pages								
				
				t = (n == current) ? " current" : ""

				links << (link_to "#{n}", request.params.merge({page: n}), class: c + t, remote: true).to_s
			end
		end

		if(current != num_pages)
			links << (link_to t(:next), request.params.merge({page: current+1}), class: c, remote: true).to_s
		end
		#links = links.html_safe
		raw links
	end

	def product_features(product, *features)
		cont = features.size

		div = ''
		features.each do |feature|
			value = product.send(feature)
			key = t(feature).to_s.titleize

			next if value == nil or value == ''

			div << "<div class='feature'><div class='key'>#{key}</div><div class='value'>"
			div << product_feature_value(value)
			div << "</div></div>"
		end
		raw div
	end

	def product_feature_value(value)
		if value.size == 0 || value == nil || value == ''
			res = false
		else
			res = "#{value}"
		end
	end

=begin
	def product_features(product, *features)
		div = '<div class="product_features"><h1>Detalhes do produto:</h1>'
		features.each do |k|
			value = product.send(k)
			key = k.to_s.titleize

			next if value == nil or value == ''

			div << "<div class='feature'><div class='key'>#{key}</div><div class='value'>"

			if value.class == BSON::Document or value.class == Hash
				subdiv = ''
				
				value.each do |key, value|
					next if value == nil
					subdiv << "<strong>#{key}:</strong> #{value} "	
				end
				div << subdiv
			else
				div << "#{value}"
			end

			div << "</div></div>"
		end
		div << "</div>"
		
		raw div
	end
=end

	def product_storage(product)
		div = ''
		
		div = '<div class="product_features"><h1>Detalhes do produto:</h1>'
		
		ssd = product.storage.ssd.to_s
		hd = product.storage.hd.to_s

		#ssd = ssd ? ssd : 'Vazio'
		#hd = hd ? hd : 'Vazio'

		div << "<div class='feature'><div class='key'>ssd</div><div class='value'>#{ssd}</div></div>"
		div << "<div class='feature'><div class='key'>hd</div><div class='value'>#{hd}</div></div>"

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
