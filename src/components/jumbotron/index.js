import React from "react"
import { Container, Item, Inner, Title, SubTitle, Image, Pane } from "./styles/jumbotron"

export default function Jumbotron({ children, direction = 'row', ...restProp }) {
    return (
        <Item {...restProp}>
            <Inner direction={direction}>{children}</Inner>
        </Item>
    )
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProp }) {
    return (<Container {...restProp}>{children}</Container>)
}

Jumbotron.Title = function JumbotronTitle({ children, ...restProp }) {
    return (<Title {...restProp}>{children}</Title>)
}

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProp }) {
    return (<SubTitle {...restProp}>{children}</SubTitle>)
}

Jumbotron.Pane = function JumbotronPane({ children, ...restProp }) {
    return (<Pane {...restProp}>{children}</Pane>)
}

Jumbotron.Image = function JumbotronImage({ children, ...restProp }) {
    return (< Image {...restProp} />)
}