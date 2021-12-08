import React from 'react';
import Wishlist from "../Pages/Wishlist";
import { Container, Row, Card } from "react-bootstrap";

export default function WishlistPage({wishlist, removeFromWishlist, total}) {
    return (
       <Container>
        <Row>
        <Card>
        <Container>
        <Row>
            
        { wishlist !== null ?
                    wishlist?.map((products, index) =>
                    <Wishlist   
                        key={index}
                        index={index}
                        products={products}
                        removeFromWishlist={removeFromWishlist}/>)
                        : 'Your wishlist is empty'}
                        <div className="py-5"> Total: ${total()}</div>

        </Row>
        </Container>                
        </Card>
        </Row>
       </Container>
    )
}