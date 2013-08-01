get '/' do
  erb :index
end

post '/beautiful' do
  text = @params[:text]
  beautiful_text = beautiful(text)
  content_type :json
  {:beautiful_text => beautiful_text}.to_json
end
