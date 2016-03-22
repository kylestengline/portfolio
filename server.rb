require "sinatra/base"
require "pry"
require "rails"
require "pg"

module Portfolio
	class Server < Sinatra::Base

		get "/" do 
			erb :index
		end
	end
end