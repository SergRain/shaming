module GetCompanies
  extend ActiveSupport::Concern

  def parce_airtable(offset = nil)
    url_to_parce = "https://api.airtable.com/v0/appuRF8EsJqiqYYR0/Grid%20view?api_key=keyPyOgHCLHxxHwae&offset=#{offset}"
    puts url_to_parce
    data = JSON.parse(Net::HTTP.get(URI.parse(url_to_parce)))
    data["records"].each do |record|
      begin
        create_update_company(record)
      rescue
      end
    end
    if (!data["offset"].blank? && offset != data["offset"])
      parce_airtable(data["offset"])
    end
  end

  def create_update_company(record)
    company_industry = find_company_industry(record["fields"]["Industry"])
    company_status = find_company_status(record["fields"]["Status"])
    company = Company.find_or_initialize_by(outer_id: record["id"])
    if record["fields"]["Last Modified"].to_datetime != company.outer_updated_at.to_datetime
      company.outer_created_at = record["createdTime"]
      company.raw_data = record.to_s
      company.company_industry_id = company_industry
      company.company_status_id = company_status
      company.name = record["fields"]["Name"]
      company.action = record["fields"]["Action"]
      company.outer_updated_at = record["fields"]["Last Modified"]
      company.active = true
      company.save
      get_company_logo(company, record["fields"]["Logo"])
    end
  end

  def get_company_logo(company, record)
    url = record[0]["url"]
    url_img = URI.parse(url)
    downloaded_image = URI.open(url_img)
    company.logo.attach(io: downloaded_image, filename: record[0]["filename"])
  end

  def find_company_industry(industry)
    CompanyIndustry.find_or_create_by(name: industry).id
  end

  def find_company_status(status)
    CompanyStatus.find_or_create_by(name: status).id
  end

  module_function :parce_airtable
  module_function :create_update_company
  module_function :get_company_logo
  module_function :find_company_industry
  module_function :find_company_status
end
