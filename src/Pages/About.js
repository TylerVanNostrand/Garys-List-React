import React from 'react'
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

export default function About() {
    return (
    <div class="d-flex justify-content-center" >
        <Card className="text-center">
            <Card.Body>
            <Card.Title>Welcome to Gary's List</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices erat lorem, rhoncus condimentum turpis dapibus sed. Vestibulum sollicitudin vel nulla at rhoncus. Integer ut efficitur nibh. Nunc facilisis lacus neque, mollis ornare augue finibus vitae. Vivamus dignissim risus sem, eu venenatis lorem iaculis eu. Nunc mollis odio in nisi mollis, ac tristique justo ullamcorper. Sed tempor facilisis laoreet. Donec et lorem congue tellus viverra condimentum sit amet consequat turpis. Phasellus efficitur ex ut consequat consectetur. Pellentesque sed mauris ac nunc tristique suscipit. Vestibulum feugiat purus id ultrices lobortis.
                Vestibulum volutpat rhoncus mi, ac tempus diam convallis nec. Integer mattis dui quis est aliquet efficitur. Quisque elementum nisl ac nulla dictum, quis placerat mauris malesuada. Phasellus ultricies nulla fermentum nisl cursus, eu efficitur ex laoreet. Proin et est accumsan, fringilla lacus ac, convallis augue. Aenean tempus vulputate quam, at dignissim libero ultrices eu. Aliquam vulputate dignissim scelerisque. Proin vel arcu ex. Donec ut erat sit amet nulla laoreet blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer sem arcu, pellentesque ac leo interdum, tincidunt pretium magna. Quisque eu blandit massa, quis pretium leo. Morbi mi augue, rhoncus quis massa at, tempor suscipit diam. Mauris laoreet semper mi, egestas pharetra purus iaculis vel.             
                </Card.Text>
                <Button as={Link} to='/products' variant="primary" size="lg">Enter Site</Button>{' '}
                <Button as={Link} to='/login' variant="primary" size="lg">Sign Up</Button>
            </Card.Body>
        </Card>
    </div>
    )
}


