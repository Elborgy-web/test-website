# Load the Rails application.
require File.expand_path('../application', __FILE__)

# Initialize the Rails application.
Rails.application.initialize!


ActionMailer::Base.smtp_settings = {
    :address => 'smtp_sendgrid.net',
    :port => '587',
    :authentication => :plain,
    :user_name => ENV['SENDGRID__USERNAME'],
    :password => ENV['SENDGRID__PASSWORD'],
    :domain => 'heroku.com',
    :enable_startstls_auto => true
}