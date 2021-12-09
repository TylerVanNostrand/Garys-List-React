import React from 'react';
import Wishlist from "../Pages/Wishlist";
import { Container, Row, Card } from "react-bootstrap";

export default function WishlistPage({wishlist, removeFromWishlist, total}) {
    return (
       <Container>
            <Row className="justify-content-center mt-5">
            <Card border="dark" className="text-center border-5">
            <Card.Header>Your Wishlist</Card.Header>
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