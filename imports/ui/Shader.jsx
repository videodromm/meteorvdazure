import React, { Component } from 'react';
import { Card, CardMedia, CardText, CardTitle, CardActions } from 'material-ui/Card';

export default class Shader extends Component {
    render() {
        return (
            <Card>

                <CardMedia
                    overlay={<CardTitle title="HypnoSwirl" subtitle="HypnoSwirl" />}
                >
                    <img src="thumbs/HypnoSwirl.glsl.jpg" />
                </CardMedia>       
                <CardText>
                    main(void)
                </CardText>
                <CardActions>

                </CardActions>
            </Card>
        )
    }
}