json.key_format! camelize: :lower
@tickets.each do |ticket|
    json.set! ticket.id do
        json.extract! ticket, :id, :price, :currency, :quantity
        json.extract! ticket, :name, :user_id, :event_id, :tickets_sold
    end
end