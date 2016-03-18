require "sinatra/base"
require "pry"
require "rails"

module Portfolio
	class Server < Sinatra::Base

		get "/" do 
			erb :index
		end

		get "/contact" do
			erb :contact
		end
	end
end