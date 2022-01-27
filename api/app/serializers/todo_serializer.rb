class UserSerializer < ActiveModel::Serializer
    attributes :id, :title, :user_id, :username
    belongs_to :user
  # usernameというメソッドを作り、名前の値をTodoと一緒に返せるように設定
    def username
      object.user.name
    end
  end
  