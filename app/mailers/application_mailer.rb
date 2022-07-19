class ApplicationMailer < ActionMailer::Base
  default from: "robot@dont-fund-russian.army"
  layout "mailer"

  def send_mail(text, from_page)
    @text = text
    @from_page = from_page
    #email = SiteConfig.find(4).value
    email = "alyona.a@dont-fund-russian.army"

    mail(to: email, subject: "New messasge from site dont-fund-russian.army") do |format|
      format.html
    end
  end
end
