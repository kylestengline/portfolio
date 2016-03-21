require "sinatra/base"
require "pry"
require "rails"

module Portfolio
	class Server < Sinatra::Base

		get "/" do 
			erb :index
		end
	end
end