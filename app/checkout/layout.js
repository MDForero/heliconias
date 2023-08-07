'use client'
import CartProvider from '@/context/CartContext'
import { useCart } from '@/context/CartContext'
export default function Layout({ children }) {
    const cart = useCart()
    console.log(cart)
    return (
        <html lang="es">
            <body>
                {children}
            </body>
        </html>
    );
}