class User < ApplicationRecord

  before_save :downcase_email

  validates :name, presence: true, length: { maximum: 50 }, allow_blank: false
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i.freeze
  validates :email, presence: true, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }
  validates :password, presence: true, length: { minimum: 6 }, allow_nil: false, allow_blank: false
  
  private
    def downcase_email
      self.email = email.downcase
    end
end
