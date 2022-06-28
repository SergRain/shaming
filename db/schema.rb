# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_06_28_113506) do
  create_table "active_admin_comments", charset: "utf8", force: :cascade do |t|
    t.string "namespace"
    t.text "body"
    t.string "resource_type"
    t.bigint "resource_id"
    t.string "author_type"
    t.bigint "author_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_type", "author_id"], name: "index_active_admin_comments_on_author"
    t.index ["namespace"], name: "index_active_admin_comments_on_namespace"
    t.index ["resource_type", "resource_id"], name: "index_active_admin_comments_on_resource"
  end

  create_table "active_storage_attachments", charset: "utf8", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", charset: "utf8", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum"
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", charset: "utf8", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "admin_users", charset: "utf8", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_admin_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_admin_users_on_reset_password_token", unique: true
  end

  create_table "companies", charset: "utf8", force: :cascade do |t|
    t.string "outer_id"
    t.datetime "outer_created_at"
    t.string "name"
    t.bigint "company_industry_id", null: false
    t.bigint "company_status_id", null: false
    t.string "action"
    t.datetime "outer_updated_at"
    t.boolean "active"
    t.integer "position"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "raw_data"
    t.index ["company_industry_id"], name: "index_companies_on_company_industry_id"
    t.index ["company_status_id"], name: "index_companies_on_company_status_id"
  end

  create_table "company_industries", charset: "utf8", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "company_statuses", charset: "utf8", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "lang_options", charset: "utf8", force: :cascade do |t|
    t.bigint "site_lang_id", null: false
    t.string "name"
    t.text "value"
    t.string "langable_type", null: false
    t.bigint "langable_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["langable_type", "langable_id"], name: "index_lang_options_on_langable"
    t.index ["site_lang_id"], name: "index_lang_options_on_site_lang_id"
  end

  create_table "news_items", charset: "utf8", force: :cascade do |t|
    t.string "name"
    t.string "link"
    t.boolean "active"
    t.integer "position"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "people_phraases", charset: "utf8", force: :cascade do |t|
    t.string "name"
    t.string "text"
    t.boolean "active"
    t.integer "position"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "post_blocks", charset: "utf8", force: :cascade do |t|
    t.string "block_type"
    t.text "text"
    t.integer "position"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.text "add_data"
    t.string "module_type"
    t.integer "module_id"
    t.string "blockable_type"
    t.integer "blockable_id"
    t.boolean "no_padding_bottom", default: false
  end

  create_table "post_sub_blocks", charset: "utf8", force: :cascade do |t|
    t.bigint "post_block_id", null: false
    t.string "name"
    t.text "text"
    t.integer "position"
    t.string "post_sub_block_type"
    t.text "add_data"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "block_type"
    t.index ["post_block_id"], name: "index_post_sub_blocks_on_post_block_id"
  end

  create_table "posts", charset: "utf8", force: :cascade do |t|
    t.string "name"
    t.string "slug"
    t.boolean "active"
    t.string "seo_title"
    t.text "seo_description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "header"
    t.string "logo_url"
    t.string "company_twitter"
    t.string "ga"
    t.integer "site_lang_id"
  end

  create_table "site_configs", charset: "utf8", force: :cascade do |t|
    t.string "name"
    t.string "value"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "site_langs", charset: "utf8", force: :cascade do |t|
    t.string "name"
    t.boolean "active"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "companies", "company_industries"
  add_foreign_key "companies", "company_statuses"
  add_foreign_key "lang_options", "site_langs"
  add_foreign_key "post_sub_blocks", "post_blocks"
end
