import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"

type CartItemProps = {
    id: number
    quantity: number
}


const CartItem: React.FC<CartItemProps> = ({id, quantity}) => {
    
    const { removFromCart } = useShoppingCart()
    const item = storeItems.find(el => el.id === id);

    if (item == null) return null

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img
                src={item.imgUrl}
                style={{ width: "125px", height: "75px", objectFit: "cover" }}
                alt={item.name}
            />
            <div className="me-auto">
                <div>
                    {item.name}
                    {quantity > 1 &&
                        <span className="text-muted" style={{ fontSize: ".65rem" }}> x{quantity}</span>
                    }
                </div>
                <div className="text-muted" style={{ fontSize: ".7W5rem" }}>
                    {formatCurrency(item.price)}
                </div>
            </div>
            <div>
                {formatCurrency(item.price * quantity)}
            </div>
            <Button variant="outline-danger" size="sm" onClick={() => removFromCart(item.id)}>
                &times;
            </Button>
        </Stack>
    )
}

export {CartItem}