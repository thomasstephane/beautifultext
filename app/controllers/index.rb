get '/' do
  erb :index
end

post '/beautiful' do
  text = @params[:text]
  content_type :json
  beautiful(text).to_json
end
