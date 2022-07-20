class ApplicationMailer < ActionMailer::Base
  default from: "putin.huilo@dont-fund-russian.army"
  layout "mailer"

  def send_mail(data)
    @data = data
    #email = SiteConfig.find(4).value
    email = "alyona.a@dont-fund-russian.army"
    email = 'kykywkin@gmail.com'
    mail(to: email, subject: "New messasge from site dont-fund-russian.army") do |format|
      format.html
    end
  end
end
